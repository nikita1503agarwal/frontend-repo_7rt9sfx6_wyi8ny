import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <section className="py-14 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to launch high‑performing campaigns?</h3>
                <p className="text-slate-300 mt-1">Start your 14‑day free trial. No credit card required.</p>
              </div>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition">
                Get started
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} ApexAds, Inc. All rights reserved.</p>
          <nav className="text-sm text-slate-600 flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
