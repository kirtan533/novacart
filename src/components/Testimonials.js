"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Fashion Enthusiast",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    review:
      "Absolutely love the premium UI and shopping experience. Everything feels smooth and modern.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Tech Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    review:
      "The animations, cart system, and overall design feel like a real premium ecommerce platform.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lifestyle Creator",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
    review:
      "One of the cleanest shopping interfaces I’ve seen. Fast, responsive, and beautifully designed.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl"
            >
              {/* USER */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>

              {/* REVIEW */}
              <p className="text-gray-300 leading-8">“{item.review}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
