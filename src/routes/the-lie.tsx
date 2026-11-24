import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Prose, StampMark } from "@/components/shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/the-lie")({
  head: () =>
    pageHead({
      path: "/the-lie",
      title: "The Press Release That Said Nothing Was Released",
      description:
        "Six weeks after the Santa Susana partial meltdown, the Atomic Energy Commission said a fuel element had parted and no radiation was released. The fuel had melted. The gas had been vented. The public waited 20 years.",
    }),
  component: LiePage,
});

function LiePage() {
  return (
    <Page
      kicker="On or about August 29, 1959"
      title="They did not stay silent. They issued a denial."
      lede="A cover-up is not only a missing document. Here it is a sentence, written after the fuel had melted, telling the country the opposite of what the building had already done."
    >
      <Prose>
        <blockquote className="border-l-2 border-accent pl-5">
          <p className="font-serif text-2xl leading-snug">
            A parted fuel element had been observed. There was no indication of
            unsafe operating conditions. No release of radioactive materials to
            the plant or its environs occurred, and operating personnel were not
            exposed to harmful conditions.
          </p>
          <footer className="mt-4 text-sm text-muted">
            Atomic Energy Commission and its contractor, Atomics International.
            Issued about six weeks after the July meltdown. Wording as reported
            from the contemporaneous release by the Bulletin of the Atomic
            Scientists, Engineering.com, and the Committee to Bridge the Gap.
          </footer>
        </blockquote>

        <h2 className="font-serif text-3xl">What was already known inside</h2>
        <p>
          <StampMark kind="documented" /> By the time that paragraph went out,
          operators had watched a power excursion, shut the reactor down,
          restarted it, and run it for days with high radiation in the building.
          Inspection would show roughly a third of the fuel elements damaged,
          with melting — not one pin that had “parted.” Workers had vented gas
          because the building could not hold it. The release said the opposite
          of each of those facts.
        </p>
        <h2 className="font-serif text-3xl">Twenty years</h2>
        <p>
          The sentence worked. The partial meltdown did not become a public
          fact in 1959. In 1979, students at UCLA and the Committee to Bridge
          the Gap found the Atomic Energy Commission’s own records and gave them
          to Los Angeles television. Warren Olney’s reporting showed photographs
          of damaged fuel and the temperatures inside a reactor that was not
          supposed to have failed that way. Daniel Hirsch later told a U.S.
          Senate committee, in September 2008, that the government had covered
          up the seriousness of the accident.
        </p>
        <h2 className="font-serif text-3xl">The second denial</h2>
        <p>
          <StampMark kind="testimony" /> After 1979 the existence of a meltdown
          was harder to deny. The venting was not. Into the 2010s, federal
          accounts still described the radiological release as minimal or
          unproven. In 2015 NBC4’s I-Team put former workers on camera. John
          Pace, who had been at the reactor in 1959, described doors opened and
          stacks used to dump radioactive gas, and orders to say nothing. Other
          workers described releases as routine: a switch, a stack, a burn of
          contaminated waste, done when the wind was judged acceptable.
        </p>
        <p>
          <StampMark kind="disputed" /> Boeing and the Department of Energy
          still reject the largest independent estimates of how much iodine and
          cesium left the site. That argument is real, and it should stay
          labeled as an argument. It does not restore the 1959 sentence. A
          release cannot be both zero and “smaller than the activists claim.”
        </p>
        <p>
          The lie is not that every illness downhill is proven. The lie is the
          one they printed.
        </p>
        <p>
          <Link to="/meltdown" className="text-accent underline underline-offset-4">
            The twelve days of the meltdown
          </Link>
          {" · "}
          <Link to="/sources" className="text-accent underline underline-offset-4">
            The documents
          </Link>
        </p>
      </Prose>
    </Page>
  );
}
