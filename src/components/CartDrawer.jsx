import React from 'react';
import { Minus, Plus, X, IndianRupee } from 'lucide-react';

export default function CartDrawer({ open, items, onClose, onInc, onDec, onCheckout, subtotal }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b p-4">
          <div className="font-semibold">Your Cart</div>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-zinc-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex h-[calc(100%-9rem)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center text-zinc-600">Your cart is empty</div>
          ) : (
            <div className="space-y-3">
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-3 rounded-lg border p-3">
                  <img src={it.img} alt={it.name} className="h-14 w-14 rounded object-cover" />
                  <div className="flex-1">
                    <div className="line-clamp-1 font-medium">{it.name}</div>
                    <div className="text-sm text-zinc-600">₹ {it.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onDec(it.id)} className="rounded-lg border p-1 hover:bg-zinc-50"><Minus className="h-4 w-4" /></button>
                    <span className="w-6 text-center">{it.qty}</span>
                    <button onClick={() => onInc(it.id)} className="rounded-lg border p-1 hover:bg-zinc-50"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600">Subtotal</span>
            <span className="inline-flex items-center gap-1 font-semibold"><IndianRupee className="h-4 w-4" /> {subtotal}</span>
          </div>
          <button onClick={onCheckout} disabled={items.length===0} className="mt-3 w-full rounded-lg bg-black py-2 text-white disabled:opacity-50">Checkout</button>
        </div>
      </aside>
    </div>
  );
}
