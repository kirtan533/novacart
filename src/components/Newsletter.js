"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="px-4 sm:px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* GLOW EFFECTS */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 sm:px-12 py-16 text-center">
            <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-5">
              Newsletter
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Subscribe For Exclusive Offers & Updates
            </h2>

            <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-8">
              Join our premium shopping community and get early access to
              exclusive collections, deals, and special discounts.
            </p>

            {/* INPUT */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-white/30 transition"
              />

              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
