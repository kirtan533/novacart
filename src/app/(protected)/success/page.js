"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center bg-white/5 border border-white/10 rounded-[40px] p-10"
      >
        {/* ICON */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-green-500/20 flex items-center justify-center">
            <FiCheckCircle size={60} className="text-green-400" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-6">Order Placed!</h1>

        {/* TEXT */}
        <p className="text-gray-400 text-lg leading-8 mb-10">
          Thank you for shopping with NovaCart. Your order has been placed
          successfully.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => router.push("/")}
          className="px-8 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
        >
          Continue Shopping
        </button>
      </motion.div>
    </main>
  );
}
