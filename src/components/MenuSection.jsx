import React from 'react';
import { Plus, Star } from 'lucide-react';

const sampleMenu = [
  { id: 'pz1', name: 'Margherita Pizza', price: 199, rating: 4.5, img: 'https://images.unsplash.com/photo-1541745537413-b8046dc6d66c?q=80&w=1200&auto=format&fit=crop' },
  { id: 'bg1', name: 'Classic Burger', price: 149, rating: 4.3, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
  { id: 'ch1', name: 'Veg Chowmein', price: 129, rating: 4.2, img: 'https://images.unsplash.com/photo-1625944525541-10b28c0c8988?q=80&w=1200&auto=format&fit=crop' },
  { id: 'pz2', name: 'Farmhouse Pizza', price: 299, rating: 4.6, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop' },
  { id: 'bg2', name: 'Chicken Burger', price: 179, rating: 4.4, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop' },
  { id: 'ch2', name: 'Hakka Noodles', price: 159, rating: 4.1, img: 'https://images.unsplash.com/photo-1604908554007-32c673ca248b?q=80&w=1200&auto=format&fit=crop' },
];

export default function MenuSection({ onAdd }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular near you</h2>
        <a className="text-sm text-orange-600 hover:underline" href="#">See all</a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sampleMenu.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <div className="relative">
              <img src={item.img} alt={item.name} className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium">
                <Star className="h-3 w-3 fill-current text-green-600" />
                {item.rating}
              </div>
            </div>
            <div className="p-3">
              <div className="line-clamp-1 font-medium">{item.name}</div>
              <div className="mt-1 text-sm text-zinc-600">₹ {item.price}</div>
              <button onClick={() => onAdd(item)} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50">
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
