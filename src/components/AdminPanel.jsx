import React from 'react';
import { CheckCircle2, XCircle, Clock, IndianRupee, MapPin } from 'lucide-react';

export default function AdminPanel({ orders, onUpdateStatus }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Admin: Orders</h2>
      </div>
      {orders.length === 0 ? (
        <div className="rounded-lg border border-zinc-200 p-6 text-center text-zinc-600">No orders yet.</div>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                </div>
                <div className="mt-1 font-medium">Order #{o.id.slice(-6).toUpperCase()}</div>
                <div className="mt-1 text-sm text-zinc-700">Items: {o.items.map(i => `${i.name} x${i.qty}`).join(', ')}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-sm text-zinc-700">
                  <MapPin className="h-4 w-4" /> {o.address || 'Live location'}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 text-sm">
                  <IndianRupee className="h-4 w-4" /> {o.total}
                </div>
                <select
                  value={o.status}
                  onChange={(e) => onUpdateStatus(o.id, e.target.value)}
                  className="rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                >
                  <option value="PLACED">Placed</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="PREPARING">Preparing</option>
                  <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                  <option value="DELIVERED">Delivered</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>
                {o.status === 'DELIVERED' ? (
                  <span className="inline-flex items-center gap-1 text-green-600"><CheckCircle2 className="h-5 w-5" /> Delivered</span>
                ) : o.status === 'CANCELLED' ? (
                  <span className="inline-flex items-center gap-1 text-red-600"><XCircle className="h-5 w-5" /> Cancelled</span>
                ) : (
                  <span className="text-sm text-zinc-600">{o.status.replaceAll('_',' ')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
