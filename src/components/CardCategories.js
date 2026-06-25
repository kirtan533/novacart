"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CategoryCard({ category }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      onClick={() => router.push(`/categories/${category.slug}`)}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-8"
    >
      <h3 className="text-2xl font-bold">{category.name}</h3>

      <p className="text-gray-400 mt-3">Explore Products →</p>
    </motion.div>
  );
}
