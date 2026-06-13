"use client";

import { motion } from "framer-motion";

export default function CategoryCard({ title, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl h-[320px] w-full"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-3xl font-bold text-white">{title}</h3>

        <button className="mt-3 px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition">
          Explore
        </button>
      </div>
    </motion.div>
  );
}
