import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Prose, StampMark } from "@/components/shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/meltdown")({
  head: () =>
    pageHead({
      path: "/meltdown",
      title: "The July 1959 Sodium Reactor Experiment Partial Meltdown",
      description:
        "What happened at the Sodium Reactor Experiment from July 12 to July 26, 1959: a partial meltdown, 13 damaged fuel elements, no containment dome, and radioactive gas vented over Los Angeles.",
    }),
  component: MeltdownPage,
});

function MeltdownPage() {
  return (
    <Page
      kicker="July 12–26, 1959 · Area IV"
      title="The reactor ran for days while the fuel was melting."
      lede="The Sodium Reactor Experiment was sodium-cooled, experimental, and built without the concrete dome later plants were required to have. When it failed, the only way to protect the people inside was to let the contamination out."
    >
      <Prose>
        <p>
          <StampMark kind="documented" /> The SRE had already made history once.
          In 1957 it supplied electricity to the grid serving Moorpark, an early
          American demonstration that a reactor could do commercial work. It sat
          in Area IV of the Santa Susana Field Laboratory, in the Simi Hills,
          about 30 miles northwest of downtown Los Angeles.
        </p>
        <h2 className="font-serif text-3xl">What broke</h2>
        <p>
          Tetralin, a pump oil, leaked into the sodium coolant. The sodium was
          hot enough to break the oil down. The residue clogged narrow channels
          that were supposed to carry heat off the fuel. Thirteen of the
          reactor’s 43 fuel elements overheated and were damaged. A portion of
          the fuel melted. Operators did not know that yet.
        </p>
        <p>
          On July 13 the power ran away. Control rods went in. The reactor was
          shut down by hand. Radiation in the building climbed. Instead of
          staying shut, the reactor was started again and kept running, off and
          on, until July 26, while radiation readings and the behavior of the
          core said the fuel was already hurt.
        </p>
        <h2 className="font-serif text-3xl">Where the radiation went</h2>
        <p>
          <StampMark kind="documented" /> There was no containment structure.
          Radioactive gas was pumped from the reactor to the atmosphere. Leakage
          into the reactor room was bad enough that, according to operator John
          Pace, the loading doors were opened to vent the building. Pace later
          told NBC4 that crews released gas through the exhaust stack, often at
          night, and were told to keep quiet.
        </p>
        <p>
          <StampMark kind="disputed" /> How large that release was. Independent
          researchers, Daniel Hirsch and the Committee to Bridge the Gap among
          them, have estimated the iodine-131 release at hundreds of times the
          roughly 17 curies usually cited for Three Mile Island. Some published
          comparisons use figures on the order of 459 times, drawn from those
          estimates. Boeing and the Department of Energy say the release was
          much smaller. The dispute is about the number. It is not about whether
          the 1959 claim of zero release was false.
        </p>
        <h2 className="font-serif text-3xl">After they looked inside</h2>
        <p>
          When the core was finally opened, damaged fuel had to be pulled with
          tools that did not exist yet. Cameras were built to see a core no one
          was meant to enter. Pieces of fuel were retrieved through the following
          months. The reactor was given a new core and restarted on September 7,
          1960. It was shut down permanently in 1964.
        </p>
        <p>
          The accident was not the only one on the hill. Other reactors suffered
          fuel damage. A sodium burn pit operated in the open for two decades.
          The meltdown is the one the government described, in writing, as
          nothing.
        </p>
        <p>
          <Link to="/the-lie" className="text-accent underline underline-offset-4">
            The press release, six weeks later
          </Link>
          {" · "}
          <Link to="/laboratory" className="text-accent underline underline-offset-4">
            The rest of the laboratory
          </Link>
        </p>
      </Prose>
    </Page>
  );
}
