export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              Fully automated performance marketing for local services
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Launch conversion‑optimized pages and Google Ads in minutes
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Give us your business basics — company, industry, services, and budget. We generate high‑converting landing pages and complete Google Ads campaigns, then optimize them for you. No manual work. Agency‑quality outcomes at a fraction of the cost.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition shadow-sm">
                Start free 14‑day trial
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50 transition">
                See how it works
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">No credit card required • Cancel anytime</p>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-white p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800">Landing pages</p>
                    <p className="text-slate-600 mt-1">Auto‑generated, conversion‑focused pages for each service.</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800">Campaigns</p>
                    <p className="text-slate-600 mt-1">Keyword themes, ad groups, ads, and extensions built for you.</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800">Optimization</p>
                    <p className="text-slate-600 mt-1">Continuous improvements to bids, budgets, and copy.</p>
                  </div>
                  <div className="rounded-lg bg-white p-4 border border-slate-200">
                    <p className="font-semibold text-slate-800">Reporting</p>
                    <p className="text-slate-600 mt-1">Clear ROI dashboards tied to real leads and bookings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
