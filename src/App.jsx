import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import AdminPanel from './components/AdminPanel';

function useGeolocation() {
  const [coords, setCoords] = useState(null);
  const [label, setLabel] = useState('Detecting location...');
  const detect = () => {
    if (!navigator.geolocation) {
      setLabel('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ latitude, longitude });
        setLabel(`${latitude.toFixed(3)}, ${longitude.toFixed(3)}`);
      },
      () => setLabel('Location access denied'),
      { enableHighAccuracy: true, maximumAge: 10_000, timeout: 10_000 }
    );
  };
  useEffect(() => { detect(); }, []);
  return { coords, label, detect };
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const { coords, label, detect } = useGeolocation();

  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };
  const inc = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const dec = (id) => setCart((prev) => prev.flatMap((p) => (p.id === id ? (p.qty > 1 ? [{ ...p, qty: p.qty - 1 }] : []) : [p])));

  const checkout = () => {
    if (cart.length === 0) return;
    const newOrder = {
      id: crypto.randomUUID(),
      items: cart,
      total: subtotal,
      status: 'PLACED',
      address: null,
      coords,
      createdAt: Date.now(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setCartOpen(false);
  };

  const updateStatus = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSearch={setQuery}
        searchQuery={query}
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        locationLabel={label}
        onDetectLocation={detect}
        onToggleAdmin={() => setIsAdmin((v) => !v)}
        isAdmin={isAdmin}
      />

      {!isAdmin && (
        <>
          <Hero onDetectLocation={detect} />
          <MenuSection onAdd={addToCart} />
        </>
      )}

      {isAdmin && (
        <AdminPanel orders={orders} onUpdateStatus={updateStatus} />
      )}

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onInc={inc}
        onDec={dec}
        onCheckout={checkout}
        subtotal={subtotal}
      />

      {orders.length > 0 && !isAdmin && (
        <div className="fixed bottom-4 left-1/2 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-xl border border-zinc-200 bg-white/90 p-3 backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm text-zinc-600">Latest order</div>
              <div className="font-medium">#{orders[0].id.slice(-6).toUpperCase()} • {orders[0].status.replaceAll('_',' ')}</div>
            </div>
            {coords && (
              <a
                href={`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-900"
              >
                Track on Maps
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
