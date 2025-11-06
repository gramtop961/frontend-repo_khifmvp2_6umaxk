import { X } from "lucide-react";

export default function CartDrawer({ open, onClose, items, onInc, onDec, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} aria-label="Close cart" className="p-2 rounded hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 space-y-4 max-h-[calc(100%-160px)] overflow-y-auto">
          {items.length === 0 && (
            <p className="text-slate-600 text-sm">Your cart is empty. Add some delicious bites!</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3">
              <img src={it.img} alt={it.name} className="h-14 w-14 rounded object-cover" />
              <div className="flex-1">
                <p className="font-medium">{it.name}</p>
                <p className="text-xs text-slate-600">${it.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onDec(it.id)} className="h-7 w-7 rounded bg-slate-100">-</button>
                <span className="w-6 text-center text-sm">{it.qty}</span>
                <button onClick={() => onInc(it.id)} className="h-7 w-7 rounded bg-slate-100">+</button>
              </div>
              <div className="w-16 text-right font-semibold">${(it.qty * it.price).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-600">Subtotal</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout & Track Live
          </button>
        </div>
      </aside>
    </div>
  );
}
