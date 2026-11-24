import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Prose, StampMark } from "@/components/shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/laboratory")({
  head: () =>
    pageHead({
      path: "/laboratory",
      title: "Santa Susana Field Laboratory: Reactors, Burn Pit, Contamination",
      description:
        "The Santa Susana Field Laboratory is a 2,850-acre Cold War site in the Simi Hills above Los Angeles. Area IV held ten nuclear reactors with no containment domes, a sodium burn pit, and contamination that is still there.",
    }),
  component: LabPage,
});

function LabPage() {
  return (
    <Page
      kicker="Simi Hills · about 2,850 acres"
      title="A reactor row and a rocket range, thirty miles from Los Angeles City Hall."
      lede="Santa Susana was supposed to be far enough away. Rocketdyne fired engines on the stands. Atomics International ran reactors for the Atomic Energy Commission in Area IV. Then subdivisions climbed the canyons."
    >
      <Prose>
        <p>
          <StampMark kind="documented" /> The site sits on the ridge between the
          San Fernando Valley and Simi Valley, above Chatsworth, West Hills,
          Bell Canyon, and Simi Valley. Roughly 150,000 people live within five
          miles today, and far more within ten. The laboratory was carved out in
          the late 1940s by North American Aviation. The nuclear work and the
          rocket work shared a hill and, later, a corporate family: Atomics
          International and Rocketdyne, then Rockwell, then Boeing.
        </p>
        <h2 className="font-serif text-3xl">Ten reactors, none with a dome</h2>
        <p>
          Area IV operated ten nuclear reactors and a “hot lab” for handling
          irradiated fuel. They were research machines, not the commercial plants
          the public learned to recognize after Three Mile Island. None had a
          containment building. The Sodium Reactor Experiment was the most
          famous failure. It was not the only fuel damage on the site. SNAP
          reactors suffered serious fuel damage in the 1960s. A radioactive
          sodium-potassium fire was reported in 1971.
        </p>
        <h2 className="font-serif text-3xl">The burn pit</h2>
        <p>
          <StampMark kind="testimony" /> From the mid-1950s until 1978, an open
          sodium burn pit was used to dispose of components contaminated with
          reactive sodium, and to burn laboratory waste. Workers have described
          dumping barrels into the pit and shooting them so the sodium would
          explode on contact with air and water. That is testimony from people
          who worked the pit, reported by investigative journalists, not a line
          from a Boeing brochure.
        </p>
        <h2 className="font-serif text-3xl">What is in the ground</h2>
        <p>
          <StampMark kind="documented" /> Regulators have spent decades mapping
          chemical and radioactive contamination. The chemicals include
          trichloroethylene used to flush engines, perchlorate, PCBs, dioxins,
          and heavy metals. The radionuclides include cesium-137, strontium-90,
          and plutonium in parts of Area IV. Groundwater is contaminated.
          Soil has been partially removed. Most of the argument now is how much
          is allowed to stay.
        </p>
        <h2 className="font-serif text-3xl">The cave on NASA’s side</h2>
        <p>
          Burro Flats, also called the Cave of the Sun, holds some of the finest
          polychrome Chumash pictographs in California, on what became NASA
          property inside the laboratory. A winter-solstice alignment was
          documented in 1979. The SSFL Sacred Sites Council, formed with
          Chumash, Tataviam, and Gabrielino/Kizh representatives, has fought to
          keep ceremony possible on a hill also classified as a contamination
          site. In 1993, grading by Southern California Edison damaged
          archaeological deposits nearby. The nuclear file and the sacred file
          are the same land.
        </p>
        <h2 className="font-serif text-3xl">A death that is not an estimate</h2>
        <p>
          On July 26, 1994, physicists Otto K. Heiney and Larry A. Pugh were
          killed when chemicals exploded during an open burn at the lab. A third
          worker, Lee Wells, was burned. The Los Angeles Times reported the
          deaths the same week. In 1996 Rockwell pleaded guilty to three federal
          felonies and paid a $6.5 million fine, at the time described as a
          record. Prosecutors said the crew was illegally burning waste. The
          company said the men believed they were doing an experiment. Both of
          those sentences can be true. The men are dead either way.
        </p>
        <p>
          <Link to="/cleanup" className="text-accent underline underline-offset-4">
            What cleanup means now
          </Link>
          {" · "}
          <Link to="/timeline" className="text-accent underline underline-offset-4">
            The chronology
          </Link>
        </p>
      </Prose>
    </Page>
  );
}
