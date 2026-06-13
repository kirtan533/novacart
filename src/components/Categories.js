"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { categories } from "@/utils/categories";

export default function Categories() {
  return (
    <section className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Shop By Category</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
