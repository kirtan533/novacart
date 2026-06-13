"use client";

import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group w-full"
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">
        <p className="text-sm text-gray-400 mb-2">{product.category}</p>

        <h3 className="text-xl font-semibold line-clamp-1">{product.title}</h3>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-6">
          <h4 className="text-2xl font-bold">${product.price}</h4>

          <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
