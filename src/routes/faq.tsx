import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/shell";
import { faqs } from "@/lib/record";
import { faqSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      path: "/faq",
      title: "Santa Susana Meltdown: Questions and Answers",
      description:
        "Straight answers on the 1959 Santa Susana partial meltdown: what happened, what the government said, how it compares to Three Mile Island, whether the site is still contaminated, and what is actually known about deaths.",
      jsonLd: faqSchema(faqs),
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <Page
      kicker="For search, and for neighbors"
      title="The questions, answered in the length of a citation."
      lede="These are the queries people type. The answers are short enough to quote and careful enough to survive a second source."
    >
      <div className="space-y-8">
        {faqs.map((item) => (
          <section key={item.q} className="border-t border-fg/15 pt-6">
            <h2 className="font-serif text-2xl">{item.q}</h2>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </section>
        ))}
      </div>
    </Page>
  );
}
