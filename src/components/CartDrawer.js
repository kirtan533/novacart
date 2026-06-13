"use client";

import { motion, AnimatePresence } from "framer-motion";

import { FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

import { useCart } from "@/context/CartContext";

export default function CartDrawer({ isOpen, setIsOpen }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-[90]"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-[#0a0a0a] border-l border-white/10 z-[100] flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold">Your Cart</h2>

              <button onClick={() => setIsOpen(false)} className="text-2xl">
                <FiX />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-400">
                  Your cart is empty
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border border-white/10 rounded-3xl p-4"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    {/* CONTENT */}
                    <div className="flex-1">
                      <h3 className="font-semibold line-clamp-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm mt-2">
                        ${item.price}
                      </p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                        >
                          <FiMinus />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                        >
                          <FiPlus />
                        </button>

                        {/* DELETE */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-400"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Total</span>

                <h3 className="text-3xl font-bold">${totalPrice.toFixed(2)}</h3>
              </div>

              <button className="w-full py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
