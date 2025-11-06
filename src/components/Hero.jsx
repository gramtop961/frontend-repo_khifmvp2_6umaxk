import { Search } from "lucide-react";

export default function Hero({ onDetectLocation }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,0,0.15),transparent_40%),_radial-gradient(circle_at_80%_0%,rgba(255,0,0,0.15),transparent_40%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Crave. Click. Devour.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600">Urban Bites</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-prose">
            Fresh pizzas, juicy burgers, and wok-tossed chowmein delivered blazing fast. Track your order live to your doorstep.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 bg-white">
              <Search size={18} className="text-slate-500" />
              <input className="w-full outline-none text-sm" placeholder="Search dishes, restaurants, or cuisines" />
            </div>
            <button onClick={onDetectLocation} className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium">
              Detect location
            </button>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Live delivery tracking • No-contact delivery • 30-min promise
          </div>
        </div>
        <div className="md:justify-self-end">
          <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop" alt="Food collage" className="w-full max-w-md rounded-2xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
