"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiStar } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function ProductModal({ isOpen, onClose, product }) {
  if (!product) return null;

  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 z-[101] w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative bg-black">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[350px] lg:h-full object-cover"
                />

                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center border border-white/10"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="uppercase text-sm tracking-[4px] text-gray-400 mb-4">
                  {product.category}
                </p>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {product.title}
                </h2>

                {/* RATING */}
                <div className="flex items-center gap-2 mb-6">
                  <FiStar className="text-yellow-400" />
                  <span className="text-gray-300">{product.rating} Rating</span>
                </div>

                <p className="text-gray-400 leading-8 mb-8">
                  {product.description}
                </p>

                {/* PRICE */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-4xl font-bold">${product.price}</h3>

                  <span className="text-green-400 text-sm">In Stock</span>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
                  >
                    Add To Cart
                  </button>

                  <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
