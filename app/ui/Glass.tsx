import { PropsWithChildren } from "react";
import clsx from "clsx";

export function GlassSurface({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        "glass-surface rounded-lgx",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx("glass-card p-5", className)}>{children}</div>
  );
}

export function GlassButton({ className, children, ...rest }: PropsWithChildren<{ className?: string }>) {
  return (
    <button className={clsx("glass-btn", className)} {...rest as any}>
      {children}
    </button>
  );
}
