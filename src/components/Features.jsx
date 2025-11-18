export default function Features() {
  const features = [
    {
      title: "Campaigns built for you",
      desc: "We create complete Google Ads structures — campaigns, ad groups, ads, keywords, negatives, locations, extensions — tailored to your services.",
    },
    {
      title: "Conversion‑first pages",
      desc: "High‑performing landing pages designed for local service intent, with trust elements and clear CTAs.",
    },
    {
      title: "Ongoing optimization",
      desc: "Bid strategies, budgets, copy testing, and keyword tuning — all automated and always improving.",
    },
    {
      title: "Lead tracking & ROI",
      desc: "Track calls, forms, and bookings. Tie spend to real outcomes with transparent dashboards.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">What’s included</h2>
          <p className="mt-3 text-slate-600">Everything you need to go from nothing to a fully functioning, optimized campaign — in minutes.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
