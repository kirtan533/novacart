"use client";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems } = useCart();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">NovaCart</h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button className="hover:text-gray-300 transition">Home</button>

          <button className="hover:text-gray-300 transition">Products</button>

          <button className="hover:text-gray-300 transition">Categories</button>

          <button className="hover:text-gray-300 transition">Contact</button>
        </div>

        {/* Cart */}
        <button onClick={() => setIsCartOpen(true)} className="relative">
          <FiShoppingCart size={24} />

          <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        </button>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
}
