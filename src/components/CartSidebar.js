"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2, FiX } from "react-icons/fi";

import { useCart } from "@/context/CartContext";
import ProtectedRoutes from "./ProtectedRoute";

export default function CartSidebar({ isOpen, onClose }) {
  const {
    cartItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <ProtectedRoutes>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#111] border-l border-white/10 z-[111] flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FiShoppingBag size={24} />

                  <h2 className="text-2xl font-bold">Your Cart</h2>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* CART ITEMS */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {cartItems.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    Cart is empty
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
                    >
                      {/* IMAGE */}
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-xl"
                      />

                      {/* CONTENT */}
                      <div className="flex-1">
                        <h3 className="font-semibold line-clamp-1">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-400 mt-1">
                          ${item.price}
                        </p>

                        {/* QUANTITY */}
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                          >
                            <FiMinus size={16} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                          >
                            <FiPlus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-start text-red-400"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* FOOTER */}
              <div className="border-t border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Total</span>

                  <h3 className="text-3xl font-bold">
                    ${totalPrice.toFixed(2)}
                  </h3>
                </div>

                <button className="w-full py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ProtectedRoutes>
  );
}
