export type Stamp = "documented" | "disputed" | "testimony";

export type Source = {
  id: string;
  title: string;
  outlet: string;
  year: string;
  url: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: "nbc",
    title: "LA’s Nuclear Secret",
    outlet: "NBC4 Los Angeles, I-Team",
    year: "2015",
    url: "https://www.nbclosangeles.com/investigations/la-nuclear-secret/54503/",
    note: "Year-long investigation. Former workers describe venting radioactive gas during and after the 1959 partial meltdown, and secrecy orders from their bosses.",
  },
  {
    id: "bulletin",
    title: "A failure of governmental candor: The fire at the contaminated Santa Susana Field Laboratory",
    outlet: "Bulletin of the Atomic Scientists",
    year: "2019",
    url: "https://thebulletin.org/2019/02/a-failure-of-governmental-candor-the-fire-at-the-contaminated-santa-susana-field-laboratory/",
    note: "Recounts the July 1959 power excursion, the decision to restart, melting of about a third of the fuel, the lack of containment, and the press release that denied a release.",
  },
  {
    id: "cbg",
    title: "The Santa Susana Field Laboratory",
    outlet: "Committee to Bridge the Gap",
    year: "ongoing",
    url: "https://www.committeetobridgethegap.org/the-santa-susana-field-laboratory/",
    note: "The watchdog group that forced the accident into public view in 1979 from Atomic Energy Commission records. Primary advocate archive.",
  },
  {
    id: "zocalo",
    title: "Why Is the Santa Susana Nuclear Accident Still Being Covered Up?",
    outlet: "Zócalo Public Square",
    year: "2022",
    url: "https://www.zocalopublicsquare.org/santa-susana-nuclear-accident/",
    note: "Warren Olney and Michael Rose on the 1979 broadcast, fuel damage, and the cleanup fight.",
  },
  {
    id: "sre-wiki",
    title: "Sodium Reactor Experiment",
    outlet: "Wikipedia",
    year: "updated 2026",
    url: "https://en.wikipedia.org/wiki/Sodium_Reactor_Experiment",
    note: "Compact technical account: 13 of 43 fuel elements damaged after tetralin contaminated the sodium coolant, July 1959. Cite the footnotes, not the summary alone.",
  },
  {
    id: "ssfl-wiki",
    title: "Santa Susana Field Laboratory",
    outlet: "Wikipedia",
    year: "updated 2026",
    url: "https://en.wikipedia.org/wiki/Santa_Susana_Field_Laboratory",
    note: "Overview of the 2,850-acre site, reactors, rocket testing, and the parties responsible for cleanup.",
  },
  {
    id: "eng",
    title: "America’s Worst Nuclear Disaster Was in California. Who Knew?",
    outlet: "Engineering.com",
    year: "2020",
    url: "https://www.engineering.com/americas-worst-nuclear-disaster-was-in-california-who-knew/",
    note: "Quotes the August 29, 1959 Atomic Energy Commission assurance that no radioactive material was released, and contrasts independent release estimates with Three Mile Island.",
  },
  {
    id: "dtsc",
    title: "Myths & Facts Regarding Boeing’s Comprehensive Cleanup Framework at SSFL",
    outlet: "California DTSC",
    year: "current",
    url: "https://dtsc.ca.gov/myths-facts-regarding-boeings-comprehensive-cleanup-framework-at-ssfl/",
    note: "The state’s position: cleanup is judged by a one-in-a-million cancer-risk standard, not by excavating every cubic yard to background.",
  },
  {
    id: "rcc",
    title: "Boeing proposed cleanup would leave most contamination on site",
    outlet: "Rocketdyne Cleanup Coalition",
    year: "2015",
    url: "https://www.rocketdynecleanupcoalition.org/new-nbc-investigation-disclosure-of-extraordinary-risks-at-ssfl-boeing-proposed-cleanup-would-leave-98-of-contamination-on-site/",
    note: "Advocate reading of Boeing’s pre-cleanup risk tables, including the Systems Test Laboratory figure advocates translate as 96 of 100 hypothetical residents.",
  },
  {
    id: "workgroup",
    title: "Analysis of Boeing Risk Assessment",
    outlet: "SSFL Work Group",
    year: "2016",
    url: "https://www.ssflworkgroup.org/files/Analysis%20of%20Boeing%20Risk%20Assessment.pdf",
    note: "PDF walkthrough of Boeing risk numbers versus the DTSC one-in-a-million goal.",
  },
  {
    id: "latimes-fine",
    title: "Rockwell Agrees to Record Fine in Fatal Blast",
    outlet: "Los Angeles Times",
    year: "1996",
    url: "https://www.latimes.com/archives/la-xpm-1996-04-09-mn-56506-story.html",
    note: "July 26, 1994 explosion at the field lab killed physicists Otto K. Heiney and Larry A. Pugh. Rockwell later pleaded guilty to federal felonies.",
  },
  {
    id: "latimes-blast",
    title: "Rocketdyne Official Says Blast Remains a Mystery",
    outlet: "Los Angeles Times",
    year: "1994",
    url: "https://www.latimes.com/archives/la-xpm-1994-07-30-me-21575-story.html",
    note: "Contemporary account of the deaths of Heiney and Pugh.",
  },
];

export const faqs = [
  {
    q: "What happened at Santa Susana in 1959?",
    a: "Between July 12 and July 26, 1959, the Sodium Reactor Experiment in Area IV of the Santa Susana Field Laboratory had a partial meltdown. Thirteen of 43 fuel elements were damaged. The reactor had no containment dome. Radioactive gas was vented while operators tried to understand a reactor they had already restarted.",
  },
  {
    q: "Did the U.S. government say the Santa Susana meltdown released no radiation?",
    a: "Yes. About six weeks later the Atomic Energy Commission issued a press release describing a parted fuel element and stating there had been no release of radioactive materials and no unsafe conditions. Later documents and worker testimony show fuel had melted and radioactivity had been vented. The size of the release is still disputed. The claim that nothing was released is not.",
  },
  {
    q: "Was the Santa Susana accident worse than Three Mile Island?",
    a: "Three Mile Island, in 1979, had a containment building and is generally credited with releasing about 17 curies of iodine-131. Santa Susana had no containment building. Independent researchers, including the Committee to Bridge the Gap, estimate the 1959 iodine release was hundreds of times larger. Boeing and the Department of Energy dispute that magnitude. Both accidents are real. Only one was admitted at the time.",
  },
  {
    q: "Where is the Santa Susana Field Laboratory?",
    a: "In the Simi Hills between the San Fernando Valley and Simi Valley, about 30 miles northwest of downtown Los Angeles. The site covers roughly 2,850 acres. It was built as a remote Cold War lab for rockets and nuclear reactors. Housing later grew up around it.",
  },
  {
    q: "How long was the meltdown kept from the public?",
    a: "About twenty years. In 1979, UCLA students and the Committee to Bridge the Gap released Atomic Energy Commission records to local television. That was the first time the public was told the 1959 event was a partial meltdown, not a minor fuel-element problem.",
  },
  {
    q: "Is Santa Susana still contaminated?",
    a: "Yes. Soil and groundwater still contain chemical and radioactive contamination from decades of reactor work, a sodium burn pit, and rocket testing. NASA and the Department of Energy agreed in 2010 to clean their portions toward background. Boeing’s later agreement with California is risk-based. Community groups say that leaves most contaminated soil in place. The state says the health standard remains one excess cancer in a million.",
  },
  {
    q: "How many people died because of Santa Susana?",
    a: "No honest public record can give a single death toll. Two scientists, Otto K. Heiney and Larry A. Pugh, were killed in a chemical explosion at the lab on July 26, 1994. A UCLA study of Rocketdyne workers found elevated cancer mortality among those with higher radiation exposure. Former workers have described cancer clusters on their crews. Families near the site have documented rare childhood cancers. Those facts are not the same thing as an unsourced count of thousands of deaths. A full offsite mortality study still has not been done.",
  },
  {
    q: "Who operated the Santa Susana reactors?",
    a: "Atomics International, then a division of North American Aviation, later Rockwell, ran the reactors for the Atomic Energy Commission. Rocketdyne used the rest of the hill for rocket engines. Boeing later acquired Rocketdyne and owns most of the site. NASA and the Department of Energy are responsible for portions of the cleanup.",
  },
];

export type TimelineEvent = {
  year: string;
  date?: string;
  title: string;
  body: string;
  kind: "nuclear" | "site" | "exposure" | "legal" | "fire";
};

export const timeline: TimelineEvent[] = [
  {
    year: "1947",
    title: "The lab is cut into the Simi Hills",
    body: "North American Aviation begins a remote field laboratory for rocket engines. Nuclear work follows in what becomes Area IV. The point of the location is distance from the city. The city later arrives.",
    kind: "site",
  },
  {
    year: "1957",
    title: "The Sodium Reactor Experiment supplies electricity",
    body: "The SRE, a sodium-cooled experimental reactor with no containment dome, puts power onto the grid serving Moorpark. It is an early U.S. demonstration of commercial nuclear electricity.",
    kind: "nuclear",
  },
  {
    year: "1959",
    date: "July 12–26",
    title: "Partial meltdown",
    body: "Coolant channels clog. The reactor runs out of control, is shut down, and is restarted. Thirteen of 43 fuel elements are later found damaged, with partial melting. Radioactive gas is vented from a building that cannot hold it.",
    kind: "nuclear",
  },
  {
    year: "1959",
    date: "About August 29",
    title: "The press release",
    body: "The Atomic Energy Commission tells the public a fuel element had parted, that conditions were not unsafe, and that no radioactive material was released to the plant or its surroundings.",
    kind: "legal",
  },
  {
    year: "1956–1978",
    title: "The sodium burn pit",
    body: "An open pit is used for years to dispose of sodium-contaminated components and combustible waste. Workers later describe barrels dumped, burned, and shot so they would rupture.",
    kind: "exposure",
  },
  {
    year: "1964",
    title: "The SRE is shut down for good",
    body: "After repairs and a restart in 1960, the reactor ends operation in 1964. Other reactors at Area IV have their own fuel-damage events, including SNAP reactor problems later in the decade.",
    kind: "nuclear",
  },
  {
    year: "1979",
    title: "The file is opened",
    body: "UCLA students and the Committee to Bridge the Gap take Atomic Energy Commission records to the press. Los Angeles learns, twenty years late, that the hill above it had a partial meltdown.",
    kind: "exposure",
  },
  {
    year: "1994",
    date: "July 26",
    title: "Two scientists are killed",
    body: "Otto K. Heiney and Larry A. Pugh die in an explosion while chemicals are burned at the lab. Rockwell later pleads guilty to federal felonies and pays a $6.5 million fine. A third worker is badly burned.",
    kind: "site",
  },
  {
    year: "1997–1999",
    title: "Worker cancer study",
    body: "UCLA epidemiologists studying Rocketdyne and Atomics International workers report higher cancer mortality associated with radiation exposure. It is a workforce study, not a count of neighbors.",
    kind: "exposure",
  },
  {
    year: "2007",
    title: "Consent order",
    body: "California’s Department of Toxic Substances Control signs an order aimed at cleaning soil and groundwater contamination. Communities hear a promise that contamination will be removed, not managed in place.",
    kind: "legal",
  },
  {
    year: "2010",
    title: "NASA and DOE agree to a background cleanup",
    body: "Administrative orders on consent commit NASA and the Department of Energy to clean their areas of responsibility toward background. Boeing does not sign the same agreement.",
    kind: "legal",
  },
  {
    year: "2015",
    title: "NBC4 and Boeing’s own risk tables",
    body: "NBC4’s “LA’s Nuclear Secret” airs worker testimony. The same year, advocates publish readings of Boeing’s risk assessment: at one operational area, pre-cleanup risk is listed as 9.6×10⁻¹. They translate that as 96 of 100 hypothetical residents.",
    kind: "exposure",
  },
  {
    year: "2017",
    title: "Conservation easement",
    body: "Boeing records an easement restricting future development. Supporters call it open-space protection. Investigators and neighbors ask whether forbidding houses is also a way to argue that a residential cleanup standard need not be met.",
    kind: "legal",
  },
  {
    year: "2018",
    date: "November 8",
    title: "Woolsey Fire",
    body: "A wildfire burns across much of the field lab and on into Ventura and Los Angeles counties. Whether it carried contamination off the hill is disputed between independent samplers and state agencies.",
    kind: "fire",
  },
  {
    year: "2022",
    title: "A different cleanup deal",
    body: "California and Boeing move to a risk-based settlement. The state says the standard is still one excess cancer in a million. Community groups say the practical result is that most contaminated soil stays on the hill.",
    kind: "legal",
  },
  {
    year: "2026",
    title: "The hill is still not clean",
    body: "Decades after the first promise of a full cleanup, families downhill are still arguing with Boeing and the state over how much contamination is allowed to remain.",
    kind: "legal",
  },
];

export const comparisons = [
  { label: "Date", sre: "July 12–26, 1959", tmi: "March 28, 1979" },
  { label: "Place", sre: "Simi Hills, above Los Angeles", tmi: "Middletown, Pennsylvania" },
  { label: "Containment dome", sre: "None", tmi: "Yes. It held." },
  { label: "What failed", sre: "13 of 43 fuel elements, partial melt", tmi: "Partial core melt" },
  {
    label: "Told to the public",
    sre: "“No release.” Hidden for 20 years.",
    tmi: "A national emergency, live",
  },
  {
    label: "Iodine-131",
    sre: "Disputed. Independent estimates: hundreds of times TMI.",
    tmi: "About 17 curies, the figure usually cited",
  },
];
