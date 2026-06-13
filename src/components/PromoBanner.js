"use client";

import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-600/20 via-black to-blue-600/20"
        >
          {/* GLOW EFFECTS */}
          <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />

          <div className="absolute -bottom-20 right-10 w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full" />

          {/* CONTENT */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 sm:px-14 py-16 lg:py-20">
            {/* LEFT */}
            <div>
              <p className="uppercase tracking-[4px] text-sm text-purple-300 mb-5">
                Limited Time Offer
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your Style With Premium Collections
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl">
                Discover fashion, electronics, and lifestyle essentials crafted
                for modern shopping experiences.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                  Shop Collection
                </button>

                <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition">
                  Explore Deals
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1170&auto=format&fit=crop"
                  alt="watch"
                  className="w-full max-w-md rounded-[30px] object-cover shadow-2xl"
                />

                {/* FLOATING CARD */}
                <div className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-5">
                  <p className="text-sm text-gray-400">Starting From</p>

                  <h3 className="text-3xl font-bold">$299</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
