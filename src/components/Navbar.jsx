import React from 'react';
import { MapPin, ShoppingCart, Search, User, Shield } from 'lucide-react';

export default function Navbar({ onSearch, searchQuery, cartCount, locationLabel, onDetectLocation, onToggleAdmin, isAdmin }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white font-bold">UB</div>
          <div>
            <div className="text-lg font-semibold leading-tight">Urban Bites</div>
            <button onClick={onDetectLocation} className="mt-0.5 inline-flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-900">
              <MapPin className="h-3.5 w-3.5" />
              <span className="truncate max-w-[160px] sm:max-w-[240px]" title={locationLabel}>{locationLabel || 'Detecting location...'}</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex relative w-[420px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for restaurants and dishes"
            className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-3 py-2 text-sm outline-none ring-0 focus:border-zinc-300"
          />
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onToggleAdmin} className={`hidden sm:inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm ${isAdmin ? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-zinc-200 hover:bg-zinc-50'}`}>
            <Shield className="h-4 w-4" />
            {isAdmin ? 'Admin Mode' : 'Admin'}
          </button>
          <button onClick={onDetectLocation} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50">
            <MapPin className="h-4 w-4" />
            Locate
          </button>
          <button className="relative inline-flex items-center gap-1.5 rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-900">
            <ShoppingCart className="h-4 w-4" />
            Cart
            {cartCount > 0 && (
              <span className="ml-1 rounded bg-white px-1.5 py-0.5 text-xs font-semibold text-black">{cartCount}</span>
            )}
          </button>
          <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>

      <div className="block md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for restaurants and dishes"
            className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-3 py-2 text-sm outline-none ring-0 focus:border-zinc-300"
          />
        </div>
      </div>
    </header>
  );
}
