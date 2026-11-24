export const SITE_NAME = "Santa Susana Record";
export const UPDATED = "November 18, 2026";
export const UPDATED_ISO = "2026-11-18";

export function originFrom(request: Request) {
  const url = new URL(request.url);
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const proto = forwardedProto || url.protocol.replace(":", "");
  const host = forwardedHost || request.headers.get("host") || url.host;
  return `${proto}://${host}`;
}

export const PATHS = [
  "/",
  "/meltdown",
  "/the-lie",
  "/laboratory",
  "/timeline",
  "/cleanup",
  "/sources",
  "/faq",
] as const;

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
  const fullTitle = opts.path === "/" ? opts.title : `${opts.title} | ${SITE_NAME}`;
  const blocks = opts.jsonLd
    ? Array.isArray(opts.jsonLd)
      ? opts.jsonLd
      : [opts.jsonLd]
    : [];
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { property: "article:modified_time", content: UPDATED_ISO },
    ],
    links: [
      { rel: "canonical", href: opts.path },
    ],
    scripts: blocks.map((block) => ({
      type: "application/ld+json",
      children: JSON.stringify(block),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description:
    "Public record of the July 13, 1959 partial meltdown at the Sodium Reactor Experiment, Santa Susana Field Laboratory, and the federal statement that no radiation was released.",
  inLanguage: "en",
  about: {
    "@type": "Event",
    name: "Sodium Reactor Experiment partial meltdown",
    startDate: "1959-07-12",
    endDate: "1959-07-26",
    location: {
      "@type": "Place",
      name: "Santa Susana Field Laboratory, Area IV",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Simi Hills",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
  },
};
