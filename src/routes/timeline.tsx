import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/shell";
import { timeline, type TimelineEvent } from "@/lib/record";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/timeline")({
  head: () =>
    pageHead({
      path: "/timeline",
      title: "Santa Susana Timeline, 1947 to 2026",
      description:
        "A chronology of the Santa Susana Field Laboratory: the 1959 partial meltdown, the Atomic Energy Commission denial, the 1979 exposure, worker studies, the Woolsey Fire, and the cleanup bargains that followed.",
    }),
  component: TimelinePage,
});

const filters: { id: "all" | TimelineEvent["kind"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nuclear", label: "Nuclear" },
  { id: "exposure", label: "Exposure" },
  { id: "legal", label: "Legal" },
  { id: "fire", label: "Fire" },
  { id: "site", label: "The site" },
];

function TimelinePage() {
  const [kind, setKind] = useState<(typeof filters)[number]["id"]>("all");
  const rows = timeline.filter((event) => kind === "all" || event.kind === kind);

  return (
    <Page
      kicker="1947 \u2014 2026"
      title="A hill, a denial, and sixty-seven years of the same argument."
      lede="Every entry below is in the public record. The list is short on purpose. It leaves out ghost stories, movie ranches, and any death toll that cannot name its study."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter the timeline">
        {filters.map((filter) => {
          const on = kind === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setKind(filter.id)}
              className={
                "min-h-11 px-3 py-2 text-sm " +
                (on ? "bg-accent text-bg" : "border border-fg/15 text-muted")
              }
              aria-pressed={on}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <ol className="space-y-0">
        {rows.map((event) => (
          <li key={event.title} className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-fg/15 py-6">
            <div>
              <p className="font-serif text-xl">{event.year}</p>
              {event.date ? <p className="mt-1 text-xs text-muted">{event.date}</p> : null}
            </div>
            <div>
              <h2 className="font-serif text-2xl">{event.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{event.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="sr-only">
        {timeline.map((event) => `${event.year} ${event.title}. ${event.body}`).join(" ")}
      </p>
    </Page>
  );
}
