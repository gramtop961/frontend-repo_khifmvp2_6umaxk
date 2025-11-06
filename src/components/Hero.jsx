import React from 'react';
import { Sparkles, LocateFixed } from 'lucide-react';

export default function Hero({ onDetectLocation }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_25rem_at_top,rgba(255,184,0,0.2),transparent)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Swiggy-like speed. Urban Bites flavour.
            </h1>
            <p className="mt-2 max-w-xl text-zinc-600">
              Crave-worthy meals from top restaurants delivered to your door. Real-time tracking, smart search, and quick reorders.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button onClick={onDetectLocation} className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-zinc-900">
                <LocateFixed className="h-4 w-4" />
                Detect my location
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 hover:bg-zinc-50">
                <Sparkles className="h-4 w-4 text-orange-500" />
                What's trending
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img alt="pizza" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" className="h-28 w-28 rounded-xl object-cover"/>
            <img alt="burger" src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop" className="h-28 w-28 rounded-xl object-cover"/>
            <img alt="noodles" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" className="h-28 w-28 rounded-xl object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}
