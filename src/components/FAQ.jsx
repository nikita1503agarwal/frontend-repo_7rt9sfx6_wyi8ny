export default function FAQ() {
  const faqs = [
    {
      q: "Do you replace an agency?",
      a: "Yes. We automate the work agencies do — page creation, campaign buildout, and ongoing optimization — at a fixed monthly price.",
    },
    {
      q: "Can I use my own domain?",
      a: "Absolutely. Connect your domain or use ours to get live immediately.",
    },
    {
      q: "How does billing work?",
      a: "You pay a platform subscription. Your Google Ads spend is billed by Google and managed through our system.",
    },
    {
      q: "What verticals do you support?",
      a: "Any local service: home services, legal, medical, wellness, automotive, education, and more.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Answers to common questions about the platform and billing.</p>
        </div>

        <dl className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <dt className="font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-2 text-slate-600 text-sm leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
