import { ShoppingCart, MapPin } from "lucide-react";

export default function Navbar({ onCartOpen, cartCount, location }) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 to-red-500 grid place-items-center text-white font-bold">UB</div>
          <div className="leading-tight">
            <p className="text-xl font-semibold">Urban Bites</p>
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <MapPin size={14} />
              {location?.city || (location?.coords ? `${location.coords.lat.toFixed(3)}, ${location.coords.lng.toFixed(3)}` : "Detecting location...")}
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#pizzas" className="hover:text-black">Pizzas</a>
          <a href="#burgers" className="hover:text-black">Burgers</a>
          <a href="#noodles" className="hover:text-black">Chowmein</a>
          <a href="#offers" className="hover:text-black">Offers</a>
        </nav>

        <button
          onClick={onCartOpen}
          className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white hover:bg-slate-900 transition"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span className="text-sm">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 h-5 min-w-[20px] px-1 rounded-full bg-amber-500 text-[11px] font-semibold grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
