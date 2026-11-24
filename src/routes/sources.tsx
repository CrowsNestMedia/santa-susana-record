import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/shell";
import { sources } from "@/lib/record";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sources")({
  head: () =>
    pageHead({
      path: "/sources",
      title: "Sources on the Santa Susana Nuclear Accident",
      description:
        "Primary and secondary sources for the Santa Susana Field Laboratory partial meltdown: NBC4, the Bulletin of the Atomic Scientists, the Committee to Bridge the Gap, DTSC, UCLA worker studies, and the Los Angeles Times.",
    }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <Page
      kicker="Read these, not a summary of them"
      title="The record is public. Most of it was not volunteered."
      lede="This site is an index with a point of view: the 1959 denial was false. Every load-bearing claim is tied to reporting or a government page below. If a number is not here, it is because it could not be sourced."
    >
      <ul className="space-y-6">
        {sources.map((source) => (
          <li key={source.id} className="border-t border-fg/15 pt-6">
            <p className="text-xs uppercase tracking-widest text-accent">
              {source.outlet} \u00b7 {source.year}
            </p>
            <h2 className="mt-2 font-serif text-2xl">
              <a href={source.url} className="underline decoration-fg/15 underline-offset-4 hover:decoration-accent" rel="noreferrer">
                {source.title}
              </a>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{source.note}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12 border border-fg/15 bg-surface p-6">
        <h2 className="font-serif text-2xl">What this record will not do</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          An earlier draft of this compendium, generated as an AI swarm exhibit,
          mixed the meltdown with ghost stories, cave legends, and estimated
          death tolls in the thousands that no study has published. Those
          numbers make the true story easier to dismiss. They are not repeated
          here. Worker testimony is labeled as testimony. Release estimates are
          labeled as disputed. The press release is labeled as false.
        </p>
      </div>
    </Page>
  );
}
