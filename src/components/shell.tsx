import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE_NAME, UPDATED } from "@/lib/seo";
import type { Stamp } from "@/lib/record";

export const NAV = [
  { to: "/meltdown", label: "Meltdown" },
  { to: "/the-lie", label: "The Lie" },
  { to: "/laboratory", label: "The Laboratory" },
  { to: "/timeline", label: "Timeline" },
  { to: "/cleanup", label: "Cleanup" },
  { to: "/sources", label: "Sources" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to the record
      </a>
      <header className="sticky top-0 z-40 border-b border-fg/15 bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <span className="block font-sans text-xs uppercase tracking-widest text-accent">
              Public record
            </span>
            <span className="block truncate font-serif text-lg leading-tight">{SITE_NAME}</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "px-2.5 py-2 text-sm " +
                    (active ? "text-fg underline decoration-accent decoration-2 underline-offset-4" : "text-muted hover:text-fg")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-fg/15 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-fg/15 px-5 py-2 lg:hidden" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div id="content">{children}</div>
      <footer className="border-t border-fg/15">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
          <div>
            <p className="font-serif text-2xl">{SITE_NAME}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              A Yom Ha Din public record of the Sodium Reactor Experiment and the
              statement that nothing radioactive left the hill. Not a government
              site. Not affiliated with Boeing, NASA, or the Department of Energy.
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted">Updated {UPDATED}</p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-muted hover:text-fg">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

const stampCopy: Record<Stamp, string> = {
  documented: "Documented",
  disputed: "Magnitude disputed",
  testimony: "Testimony",
};

export function StampMark({ kind }: { kind: Stamp }) {
  return (
    <span className="inline-flex items-center border border-fg/15 px-2 py-1 font-sans text-xs uppercase tracking-widest text-accent">
      {stampCopy[kind]}
    </span>
  );
}

export function Page({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <header className="border-b border-fg/15">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <p className="font-sans text-xs uppercase tracking-widest text-accent">{kicker}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{lede}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-12">{children}</div>
    </article>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5 text-base leading-relaxed text-fg/95">{children}</div>;
}
