export default function HowItWorks() {
  const steps = [
    {
      title: "Tell us the basics",
      desc: "Company name, industry, service areas, offerings, budget. That’s it.",
    },
    {
      title: "We generate everything",
      desc: "Landing pages, keywords, ad groups, ads, locations, and extensions — all built to best practices.",
    },
    {
      title: "Go live and optimize",
      desc: "We monitor, test, and adjust automatically to hit your goals.",
    },
  ];

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">From first input to live campaigns, fully automated.</p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-slate-200 bg-white p-6">
              <span className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow">{i + 1}</span>
              <h3 className="font-semibold text-slate-900 mt-2">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
