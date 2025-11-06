import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [location, setLocation] = useState({ city: null, coords: null });
  const [orderActive, setOrderActive] = useState(false);

  const cartCount = useMemo(() => cart.reduce((sum, it) => sum + it.qty, 0), [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const incQty = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const decQty = (id) =>
    setCart((prev) => prev.flatMap((p) => (p.id === id ? (p.qty > 1 ? [{ ...p, qty: p.qty - 1 }] : []) : [p])));

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setLocation({ city: null, coords });
      },
      (err) => {
        console.error(err);
        alert("Could not access location. Please allow permission.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  useEffect(() => {
    // Try to get location on first load silently
    if (!location.coords && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ city: null, coords: { lat: pos.coords.latitude, lng: pos.coords.longitude } }),
        () => {}
      );
    }
  }, []);

  const handleCheckout = () => {
    if (!location.coords) {
      alert("Please detect your location before checkout so we can deliver to you.");
      return;
    }
    setOrderActive(true);
    setCartOpen(false);
  };

  const mapsLink = location.coords
    ? `https://www.google.com/maps?q=${location.coords.lat},${location.coords.lng}`
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={cartCount} location={location} />
      <Hero onDetectLocation={detectLocation} />

      {orderActive && (
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900">
            <p className="font-semibold">Order placed! Tracking live.</p>
            <p className="text-sm mt-1">Your rider will navigate to your location. Keep your phone nearby.</p>
            {mapsLink && (
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-sm font-medium text-amber-700 underline"
              >
                View your location on Google Maps
              </a>
            )}
          </div>
        </div>
      )}

      <MenuSection onAdd={addToCart} />

      <footer className="mt-16 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Urban Bites. Fast delivery for pizzas, burgers & chowmein.</p>
          <div className="flex items-center gap-4">
            <a href="#offers" className="hover:text-black">Offers</a>
            <a href="#" className="hover:text-black">Support</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onInc={incQty}
        onDec={decQty}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
