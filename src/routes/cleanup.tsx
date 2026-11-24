import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Prose, StampMark } from "@/components/shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cleanup")({
  head: () =>
    pageHead({
      path: "/cleanup",
      title: "Santa Susana Cleanup: What Boeing and the State Disagree About",
      description:
        "California promised a cleanup of the Santa Susana Field Laboratory. NASA and DOE agreed to clean toward background. Boeing’s later deal is risk-based. Advocates say most contamination would remain. DTSC says the standard is one cancer in a million.",
    }),
  component: CleanupPage,
});

function CleanupPage() {
  return (
    <Page
      kicker="Still unfinished"
      title="The argument now is how much of the poison is allowed to stay."
      lede="Nobody credible says the hill is clean. The fight is over the definition of clean, and over who has to dig."
    >
      <Prose>
        <h2 className="font-serif text-3xl">The promise</h2>
        <p>
          <StampMark kind="documented" /> In 2007 the California Department of
          Toxic Substances Control signed a consent order covering soil and
          groundwater. Neighbors understood it as a commitment to remove
          contamination, not to license it. In 2010 NASA and the Department of
          Energy signed further agreements to clean their portions of the site
          toward background — the level before the laboratory. Boeing, which
          owns most of the land, did not sign that background agreement.
        </p>
        <h2 className="font-serif text-3xl">Boeing’s numbers, two translations</h2>
        <p>
          <StampMark kind="disputed" /> In 2015 Boeing’s risk assessment became
          public through community review and NBC4. The SSFL Work Group and the
          Rocketdyne Cleanup Coalition read one operational area, the Systems
          Test Laboratory, at a pre-cleanup risk of 9.6×10⁻¹. They translate
          that as 96 of 100 hypothetical residents developing cancer if they
          lived on that ground, and they say Boeing’s preferred plan would
          leave on the order of 98 percent of contaminated soil unexcavated.
        </p>
        <p>
          DTSC’s published reply is that the measure of protection is not “dig
          until the hill looks like 1946.” It is a target of one excess cancer
          in a million after cleanup, the same order of standard used at
          residential cleanups around the country. The department says both the
          2007 order and the later Boeing settlement aim at that risk number,
          and that a background dig would scar the land and the neighbors more
          than a risk-based dig.
        </p>
        <p>
          Both documents are linked on the{" "}
          <Link to="/sources" className="text-accent underline underline-offset-4">
            sources page
          </Link>
          . Read them next to each other. A risk of 9.6×10⁻¹ and a promise of
          one in a million are not the same sentence.
        </p>
        <h2 className="font-serif text-3xl">The easement</h2>
        <p>
          In 2017 Boeing recorded a conservation easement that blocks housing on
          the property. Open space is a real public good on a ridge this size.
          It is also the premise of a lower cleanup: if no one is supposed to
          live there, a residential risk scenario can be waved off. Reuters and
          local advocates have asked whether the easement functions as a
          cleanup discount. Indigenous representatives have pointed out that
          “no development” can also mean “no ceremony” if access to sacred
          sites stays fenced.
        </p>
        <h2 className="font-serif text-3xl">The fire</h2>
        <p>
          <StampMark kind="disputed" /> On November 8, 2018 the Woolsey Fire
          started near the laboratory and burned a large share of SSFL before
          running into Thousand Oaks, Malibu, and the valleys. Independent
          samplers later reported radioactive particles offsite, including a
          reading described as many times background miles from the fence.
          State agencies said the fire did not spread contamination at a level
          that threatened public health. The studies do not agree. People who
          breathed that smoke did not get to wait for the agreement.
        </p>
        <h2 className="font-serif text-3xl">Where it stands</h2>
        <p>
          As of this record’s update in November 2026, the site is not cleaned
          to background, families are still organized against the weaker plan,
          and the state’s position remains that a one-in-a-million risk target
          is health-protective. Court fights over the Boeing settlement have
          gone against the community groups more often than not. A lost motion
          is not a scientific finding that the soil is safe.
        </p>
        <p>
          If you live downhill, the useful next step is not a comment box on
          this site. It is the primary record: DTSC’s SSFL pages, the Committee
          to Bridge the Gap, Parents Against SSFL, and your own representatives,
          on paper.
        </p>
      </Prose>
    </Page>
  );
}
