import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold shadow-sm">A</span>
          <span className="text-slate-900 font-semibold text-lg">ApexAds</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">Log in</a>
          <a href="#pricing" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">Start free trial</a>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
