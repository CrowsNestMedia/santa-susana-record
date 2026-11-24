import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, websiteSchema } from "@/lib/seo";
import { comparisons } from "@/lib/record";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Santa Susana Meltdown: The 1959 Accident Los Angeles Was Not Told",
      description:
        "July 13, 1959: a partial meltdown at the Santa Susana Field Laboratory, with no containment dome. The government said no radiation was released. That was not true.",
      jsonLd: websiteSchema,
    }),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="border-b border-fg/15">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="font-sans text-xs uppercase tracking-widest text-accent">
            Sodium Reactor Experiment · Area IV · Simi Hills · July 1959
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
            The meltdown Los Angeles was told never released a thing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            On July 13, 1959, an experimental reactor with no containment dome
            partially melted above the San Fernando Valley. Weeks later the
            Atomic Energy Commission said no radioactivity had escaped. The
            fuel had melted. The gas had been vented. The public was not told
            for twenty years.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/the-lie"
              className="inline-flex min-h-11 items-center bg-accent px-5 py-3 text-sm font-medium text-bg"
            >
              Read the press release
            </Link>
            <Link
              to="/meltdown"
              className="inline-flex min-h-11 items-center border border-fg/15 px-5 py-3 text-sm text-fg"
            >
              What the reactor did
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-fg/15" aria-label="Established facts">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {[
            ["13 of 43", "Fuel elements damaged. About a third of the core. Partial melting, not a parted pin."],
            ["No dome", "Unlike every commercial power reactor people picture, the SRE had no containment structure."],
            ["20 years", "The partial meltdown stayed out of public view until Atomic Energy Commission files surfaced in 1979."],
          ].map(([stat, copy]) => (
            <div key={stat} className="border-fg/15 px-5 py-8 sm:border-l sm:first:border-l-0">
              <p className="font-serif text-4xl">{stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">What they issued</h2>
          <blockquote className="mt-6 border-l-2 border-accent pl-5">
            <p className="font-serif text-2xl leading-snug">
              A parted fuel element. No indication of unsafe operating conditions.
              No release of radioactive materials.
            </p>
            <footer className="mt-4 text-sm text-muted">
              Atomic Energy Commission, about six weeks after the meltdown, on or
              about August 29, 1959.
            </footer>
          </blockquote>
          <p className="mt-6 leading-relaxed text-muted">
            That release is the lie. Not a rumor about tunnels. Not a guessed
            body count. A federal sentence that does not survive the documents
            the same agency kept.
          </p>
          <Link to="/the-lie" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
            How the sentence was taken apart
          </Link>
        </div>
        <div className="bg-surface p-6 sm:p-8">
          <h2 className="font-serif text-3xl">What is not settled</h2>
          <p className="mt-4 leading-relaxed text-muted">
            How many curies left the stack. How many cancers belong to the hill.
            Whether the Woolsey Fire carried contamination into neighborhoods.
            Boeing and the Department of Energy say independent estimates of the
            1959 release are far too high. Community groups say the official
            numbers are still a minimization.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            This record separates those arguments from the part that is finished:
            the reactor melted, it had no dome, and the public was told otherwise.
          </p>
          <Link to="/faq" className="mt-4 inline-block text-sm text-accent underline underline-offset-4">
            The questions people actually search
          </Link>
        </div>
      </section>

      <section className="border-y border-fg/15 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-serif text-3xl">Next to Three Mile Island</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Three Mile Island is the accident the country memorized. It happened
            twenty years later, inside a containment building, on television.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-fg/15 text-xs uppercase tracking-widest text-muted">
                  <th className="py-3 pr-4 font-medium"> </th>
                  <th className="py-3 pr-4 font-medium">Santa Susana, 1959</th>
                  <th className="py-3 font-medium">Three Mile Island, 1979</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-b border-fg/15">
                    <th className="py-3 pr-4 font-medium text-fg">{row.label}</th>
                    <td className="py-3 pr-4 text-muted">{row.sre}</td>
                    <td className="py-3 text-muted">{row.tmi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-3xl">Read the file</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["/meltdown", "The meltdown", "Twelve days in July. A clogged core, a restart, and a building that could only be opened."],
            ["/laboratory", "The laboratory", "Ten reactors, a burn pit, rocket stands, and a Chumash sacred site on the same hill."],
            ["/timeline", "Timeline", "From the 1947 groundbreaking to a cleanup that is still being bargained in 2026."],
            ["/cleanup", "The cleanup", "What was promised, what Boeing’s risk tables say, and what the state now claims is protective."],
            ["/sources", "Sources", "NBC4, the Bulletin of the Atomic Scientists, the Committee to Bridge the Gap, DTSC, the Los Angeles Times."],
            ["/faq", "FAQ", "Plain answers for the searches: meltdown, cover-up, Three Mile Island, deaths, location."],
          ].map(([to, title, copy]) => (
            <Link key={to} to={to} className="border border-fg/15 p-5 hover:border-accent">
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
