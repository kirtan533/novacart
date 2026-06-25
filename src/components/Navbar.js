"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { FiShoppingCart, FiHeart } from "react-icons/fi";

import { useCart } from "@/context/CartContext";

import { useWishlist } from "@/context/WishlistContext";

import CartDrawer from "./CartDrawer";

import WishlistDrawer from "./WishlistDrawer";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const { cartItems } = useCart();

  const { wishlistItems } = useWishlist();

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-wide">NovaCart</h1>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>

            <Link className="hover:text-gray-300 transition" href="/product">
              Products
            </Link>

            <Link href="/categories" className="hover:text-gray-300 transition">
              Categories
            </Link>

            <button className="hover:text-gray-300 transition">Contact</button>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-5">
            {/* WISHLIST */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative"
            >
              <FiHeart size={24} />

              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            </button>

            {/* CART */}
            <button onClick={() => setIsOpen(true)} className="relative">
              <FiShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* CART DRAWER */}
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* WISHLIST DRAWER */}
      <WishlistDrawer isOpen={isWishlistOpen} setIsOpen={setIsWishlistOpen} />
    </>
  );
}
