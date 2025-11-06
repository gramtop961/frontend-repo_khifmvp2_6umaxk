import { Plus } from "lucide-react";

const categories = [
  {
    id: "pizzas",
    title: "Pizzas",
    items: [
      { id: "margherita", name: "Margherita", desc: "Classic cheese & basil", price: 7.99, img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2a?q=80&w=1000&auto=format&fit=crop" },
      { id: "pepperoni", name: "Pepperoni", desc: "Smoky pepperoni & mozzarella", price: 8.99, img: "https://images.unsplash.com/photo-1541745537413-b804ba1da9b3?q=80&w=1000&auto=format&fit=crop" },
      { id: "veggie", name: "Veggie Supreme", desc: "Peppers, olives, corn", price: 8.49, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      { id: "classic-burger", name: "Classic Burger", desc: "Grilled patty, cheddar, sauce", price: 6.49, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" },
      { id: "chicken-burger", name: "Crispy Chicken Burger", desc: "Buttermilk fried chicken", price: 6.99, img: "https://images.unsplash.com/photo-1550547660-8a8c5f094527?q=80&w=1000&auto=format&fit=crop" },
    ],
  },
  {
    id: "noodles",
    title: "Chowmein",
    items: [
      { id: "veg-chow", name: "Veg Chowmein", desc: "Stir-fried noodles & veggies", price: 5.99, img: "https://images.unsplash.com/photo-1604908176997-431232b95b2b?q=80&w=1000&auto=format&fit=crop" },
      { id: "schezwan-chow", name: "Schezwan Chowmein", desc: "Spicy, bold flavors", price: 6.49, img: "https://images.unsplash.com/photo-1584420368407-5581676f0472?q=80&w=1000&auto=format&fit=crop" },
    ],
  },
];

export default function MenuSection({ onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {categories.map((cat) => (
        <div key={cat.id} id={cat.id}>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-2xl font-bold">{cat.title}</h2>
            <a href="#" className="text-sm text-amber-600 hover:underline">View all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((item) => (
              <article key={item.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                    <button onClick={() => onAdd(item)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black text-white text-sm hover:bg-slate-900">
                      <Plus size={16} /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
