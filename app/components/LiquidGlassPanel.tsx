"use client";

import { useEffect, useRef, useState } from "react";

type SceneSpec = {
  id: string;                 // element id of the scene section (e.g., "s1")
  title: string;
  body: string;
};

type Props = {
  scenes: SceneSpec[];
  heroId?: string;
};

const EMA_ALPHA = 0.06;
const GAUSS_SIGMA_FACTOR = 0.95;
const SWITCH_ABS = 0.58;
const SWITCH_DIFF = 0.07;
const ANCHOR_MS = 1400;
const HEADER_H = 64;

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5) ? (2*t*t) : (1 - Math.pow(-2*t + 2, 2) / 2);
const easeInOutCubic = (t: number) => (t < 0.5) ? (4*t*t*t) : (1 - Math.pow(-2*t + 2, 3) / 2);
const gaussian = (d: number, sigma: number) => Math.exp(-(d*d) / (2*sigma*sigma));

export default function LiquidGlassPanel({ scenes, heroId = "hero" }: Props) {
  const glassRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const backTitleRef = useRef<HTMLHeadingElement>(null);
  const backBodyRef = useRef<HTMLParagraphElement>(null);
  const frontTitleRef = useRef<HTMLHeadingElement>(null);
  const frontBodyRef = useRef<HTMLParagraphElement>(null);

  const [committedIdx, setCommittedIdx] = useState(0);
  const isFadingRef = useRef(false);
  const tSmoothRef = useRef(0);

  // Anchor smooth scrolling for any [data-smooth] link
  useEffect(() => {
    function smoothScrollTo(el: HTMLElement, ms = ANCHOR_MS) {
      const rect = el.getBoundingClientRect();
      const targetY = (window.scrollY || document.documentElement.scrollTop) + rect.top - (HEADER_H + 10);
      const start = window.scrollY || document.documentElement.scrollTop;
      const delta = targetY - start;
      let t0: number | undefined;
      function step(ts: number) {
        if (t0 === undefined) t0 = ts;
        const t = Math.min((ts - t0) / ms, 1);
        const eased = easeInOutCubic(t);
        window.scrollTo(0, start + delta * eased);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const anchors = document.querySelectorAll<HTMLAnchorElement>('[data-smooth]');
    const onClick = (e: MouseEvent) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute("href");
      if (id && id.startsWith("#")) {
        const target = document.querySelector<HTMLElement>(id);
        if (target) { e.preventDefault(); smoothScrollTo(target, ANCHOR_MS); }
      }
    };
    anchors.forEach(a => a.addEventListener("click", onClick));
    return () => anchors.forEach(a => a.removeEventListener("click", onClick));
  }, []);

  // Fit glass content height to active layer or blend
  function fitContentHeightTo(opacityBack: number | null = null) {
    const front = frontRef.current;
    const back = backRef.current;
    const content = contentRef.current;
    if (!front || !back || !content) return;
    const hFront = Math.ceil(front.scrollHeight);
    const hBack  = Math.ceil(back.scrollHeight);
    const t = opacityBack == null ? (front.classList.contains("active") ? 0 : 1) : opacityBack;
    const h = Math.ceil(lerp(hFront, hBack, t));
    content.style.height = h + "px";
  }

  // Height tracking during fade
  const rafUntilRef = useRef(0);
  const heightRAFRef = useRef<number | 0>(0 as any);
  function trackHeight(ts: number) {
    const back = backRef.current;
    if (!back) return;
    const style = getComputedStyle(back);
    const opacityBack = parseFloat(style.opacity) || 0;
    fitContentHeightTo(opacityBack);
    if (ts < rafUntilRef.current) {
      heightRAFRef.current = requestAnimationFrame(trackHeight);
    } else {
      heightRAFRef.current = 0 as any;
      fitContentHeightTo();
    }
  }
  function startHeightTracking(ms = 1600) {
    rafUntilRef.current = performance.now() + ms;
    if (!heightRAFRef.current) heightRAFRef.current = requestAnimationFrame(trackHeight);
  }

  // Scene computation
  function computeBlend() {
    const hero = document.getElementById(heroId)!;
    const sceneEls = scenes.map(s => document.getElementById(s.id)!).filter(Boolean);
    const h = window.innerHeight || 1;
    const center = h * 0.5;
    const sigma  = h * GAUSS_SIGMA_FACTOR;

    let sumW = 0, blendedP = 0;
    let topIdx = -1, topW = -1, secondW = -1;

    const weights = sceneEls.map((el, i) => {
      const r = el.getBoundingClientRect();
      const sceneCenter = r.top + r.height / 2;
      const dist = sceneCenter - center;
      const w = gaussian(dist, sigma);
      const p = clamp((center - r.top) / (r.height || 1), 0, 1);
      if (w > topW) { secondW = topW; topW = w; topIdx = i; }
      else if (w > secondW) { secondW = w; }
      sumW += w; blendedP += w * p;
      return { w, p, el };
    });

    blendedP = (sumW > 0) ? (blendedP / sumW) : 0;
    return { weights, topIdx, topW, secondW, blendedP };
  }

  function maybeSwitchContent(topIdx: number, topW: number, secondW: number) {
    if (topIdx === committedIdx) return;
    const shouldSwitch = (topW > SWITCH_ABS) || ((topW - secondW) > SWITCH_DIFF);
    if (!shouldSwitch || isFadingRef.current) return;

    const next = scenes[topIdx];
    if (!next) return;

    // Prepare next content in back layer
    if (backTitleRef.current) backTitleRef.current.textContent = next.title;
    if (backBodyRef.current)  backBodyRef.current.textContent  = next.body;

    const back = backRef.current!;
    const front = frontRef.current!;
    isFadingRef.current = true;
    back.classList.add("active");
    front.classList.remove("active");

    startHeightTracking(1600);

    const onEnd = () => {
      // Commit text to front
      if (frontTitleRef.current) frontTitleRef.current.textContent = next.title;
      if (frontBodyRef.current)  frontBodyRef.current.textContent  = next.body;
      back.classList.remove("active");
      front.classList.add("active");
      setCommittedIdx(topIdx);
      isFadingRef.current = false;
      back.removeEventListener("transitionend", onEnd);
      fitContentHeightTo();
    };
    back.addEventListener("transitionend", onEnd);
  }

  function morphGlass(blendedP: number) {
    const glass = glassRef.current;
    if (!glass) return;
    const tTarget = easeInOut(blendedP);
    tSmoothRef.current = lerp(tSmoothRef.current, tTarget, EMA_ALPHA);

    const cs = getComputedStyle(document.documentElement);
    const minW  = parseFloat(cs.getPropertyValue("--min-width"));
    const maxW  = parseFloat(cs.getPropertyValue("--max-width"));
    const minR  = parseFloat(cs.getPropertyValue("--min-radius"));
    const maxR  = parseFloat(cs.getPropertyValue("--max-radius"));
    const minP  = parseFloat(cs.getPropertyValue("--min-padding"));
    const maxP  = parseFloat(cs.getPropertyValue("--max-padding"));
    const minT  = parseFloat(cs.getPropertyValue("--min-top"));
    const maxT  = parseFloat(cs.getPropertyValue("--max-top"));
    const minBG = parseFloat(cs.getPropertyValue("--min-bg"));
    const maxBG = parseFloat(cs.getPropertyValue("--max-bg"));

    glass.style.setProperty("--panel-width",   lerp(minW, maxW, tSmoothRef.current) + "px");
    glass.style.setProperty("--panel-radius",  lerp(minR, maxR, tSmoothRef.current) + "px");
    glass.style.setProperty("--panel-padding", lerp(minP, maxP, tSmoothRef.current) + "px");
    glass.style.setProperty("--panel-top",     lerp(minT, maxT, tSmoothRef.current) + "vh");
    glass.style.setProperty("--panel-bg",      lerp(minBG, maxBG, tSmoothRef.current).toString());
  }

  function updateTints(weights: { w: number; el: Element }[]) {
    const base = 0.45, extra = 0.15;
    weights.forEach(({ w, el }) => {
      const tint = (el as HTMLElement).querySelector<HTMLElement>(".scene-tint");
      if (tint) tint.style.setProperty("--tint-opacity", (base + (1 - w) * extra).toFixed(3));
    });
  }

  function updateHeroVisibility() {
    const hero = document.getElementById(heroId);
    const glass = glassRef.current;
    if (!hero || !glass) return;
    const r = hero.getBoundingClientRect();
    const show = (r.bottom <= HEADER_H + 12);
    glass.classList.toggle("opacity-0", !show);
    glass.classList.toggle("pointer-events-none", !show);
  }

  useEffect(() => {
    const onScroll = () => {
      updateHeroVisibility();
      const { weights, topIdx, topW, secondW, blendedP } = computeBlend();
      maybeSwitchContent(topIdx, topW, secondW);
      morphGlass(blendedP);
      updateTints(weights as any);
      fitContentHeightTo();
    };
    const onResize = () => { fitContentHeightTo(); onScroll(); };

    // initial paint
    fitContentHeightTo();
    onScroll();
    const handler = () => requestAnimationFrame(onScroll);
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler as any);
      window.removeEventListener("resize", onResize);
    };
  }, [scenes, heroId, committedIdx]);

  const first = scenes[0];

  return (
    <article
      ref={glassRef}
      className="fixed z-[900] left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-glass-inout"
      style={{
        top: "var(--panel-top, 12vh)",
        width: "var(--panel-width, 640px)",
        maxWidth: "calc(100vw - 48px)",
        padding: "var(--panel-padding, 24px)",
        borderRadius: "var(--panel-radius, 22px)",
        background: "rgba(255,255,255,var(--panel-bg, 0.16))",
        border: "1px solid rgba(255,255,255,var(--edge))",
        boxShadow: "0 10px 34px rgba(0,0,0,0.35)",
        backdropFilter: "blur(var(--panel-blur, var(--blur))) saturate(var(--saturate))",
        WebkitBackdropFilter: "blur(var(--panel-blur, var(--blur))) saturate(var(--saturate))",
      }}
      aria-live="polite"
    >
      <div ref={contentRef} className="relative transition-[height] duration-[420ms] ease-glass-inout">
        {/* Front layer (active) */}
        <div ref={frontRef} className="layer active absolute inset-0 opacity-100 transition-opacity duration-[1400ms] ease-glass-inout">
          <h1 ref={frontTitleRef} className="m-0 mb-3 text-[clamp(1.3rem,2.2vw,2rem)] tracking-wide">
            {first?.title ?? "Scene 1"}
          </h1>
          <p ref={frontBodyRef} className="m-0 leading-relaxed text-[clamp(0.98rem,1.4vw,1.1rem)] text-justify">
            {first?.body ?? ""}
          </p>
        </div>

        {/* Back layer (fading in) */}
        <div ref={backRef} className="layer absolute inset-0 opacity-0 transition-opacity duration-[1400ms] ease-glass-inout">
          <h1 ref={backTitleRef} className="m-0 mb-3 text-[clamp(1.3rem,2.2vw,2rem)] tracking-wide"></h1>
          <p ref={backBodyRef} className="m-0 leading-relaxed text-[clamp(0.98rem,1.4vw,1.1rem)] text-justify"></p>
        </div>
      </div>
    </article>
  );
}
