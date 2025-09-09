"use client";

import Link from "next/link";
import { useEffect } from "react";

const HEADER_HEIGHT = 64; // must match --header-h

export default function Header() {
  useEffect(() => {
    const root = document.documentElement;
    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const pct = Math.max(0, Math.min(1, scrollTop / scrollHeight)) * 100;
      root.style.setProperty("--progress", pct + "%");
    };
    const onScroll = () => requestAnimationFrame(updateProgress);
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Timed, eased smooth scrolling (matches your anchor behaviour)
  useEffect(() => {
    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function smoothScrollTo(el: HTMLElement, ms = 1400) {
      const headerH = HEADER_HEIGHT + 10;
      const rect = el.getBoundingClientRect();
      const targetY =
        (window.scrollY || document.documentElement.scrollTop) +
        rect.top -
        headerH;
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
        if (target) {
          e.preventDefault();
          smoothScrollTo(target, 1400);
        }
      }
    };

    anchors.forEach(a => a.addEventListener("click", onClick));
    return () => anchors.forEach(a => a.removeEventListener("click", onClick));
  }, []);

  return (
    <header className="glass-nav">
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold tracking-wide">Liquid Glass</div>
        <nav className="flex items-center gap-3" aria-label="Primary">
          <Link href="#hero" data-smooth className="px-3 py-2 rounded-lg hover:bg-white/10">Hero</Link>
          <Link href="#s1" data-smooth className="px-3 py-2 rounded-lg hover:bg-white/10">Scene 1</Link>
          <Link href="#s2" data-smooth className="px-3 py-2 rounded-lg hover:bg-white/10">Scene 2</Link>
          <Link href="#s3" data-smooth className="px-3 py-2 rounded-lg hover:bg-white/10">Scene 3</Link>
          <Link href="#s4" data-smooth className="px-3 py-2 rounded-lg hover:bg-white/10">Scene 4</Link>
        </nav>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  );
}
