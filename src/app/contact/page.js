"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[180px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[4px] text-sm text-gray-400 mb-5"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            We'd Love To Hear
            <br />
            From You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8 text-gray-400 leading-8"
          >
            Whether you have a question about your order, our products,
            shipping, or simply want to say hello — our team is always ready to
            help.
          </motion.p>
        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24">
        {/* We will build here next */}
      </section>
    </main>
  );
}
