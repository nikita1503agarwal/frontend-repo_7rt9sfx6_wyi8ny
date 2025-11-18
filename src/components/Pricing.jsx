export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 199,
      tagline: "For solo operators getting started",
      features: [
        "1 website and 2 services",
        "1 Google Ads campaign",
        "Up to $1k monthly ad spend",
        "Automated landing pages",
        "Basic optimization",
        "Email support",
      ],
      cta: "Start free trial",
      highlighted: false,
    },
    {
      name: "Growth",
      price: 499,
      tagline: "For growing teams and multi‑location",
      features: [
        "Up to 3 websites and 6 services",
        "3 Google Ads campaigns",
        "Up to $5k monthly ad spend",
        "Conversion‑rate optimization",
        "A/B ad copy testing",
        "Priority support",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Scale",
      price: 999,
      tagline: "For established brands and agencies",
      features: [
        "Unlimited websites and services",
        "Unlimited campaigns",
        "Managed ad spend at any level",
        "Advanced optimization + rules",
        "Custom reporting + integrations",
        "Dedicated success manager",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Flat monthly platform fee. We manage your Google Ads spend directly. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border ${p.highlighted ? 'border-blue-600 shadow-xl ring-1 ring-blue-600/10' : 'border-slate-200'} bg-white p-6 sm:p-8`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">Most popular</span>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-slate-600 text-sm">{p.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-slate-900">${p.price}</span>
                  <span className="text-slate-500 ml-1">/mo</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 block w-full rounded-lg px-4 py-2 text-center font-semibold transition ${p.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">Ad spend billed directly by Google. We simply manage it for you.</p>
      </div>
    </section>
  );
}
