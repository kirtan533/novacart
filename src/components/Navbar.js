"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";
import Link from "next/link";
import { FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
              NovaCart
            </h1>
          </Link>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/"
              className={`${pathname === "/" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
            >
              Home
            </Link>

            <Link
              className={`${pathname === "/product" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
              href="/product"
            >
              Products
            </Link>

            <Link
              href="/categories"
              className={`${pathname === "/categories" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
            >
              Categories
            </Link>

            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
            >
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-5">
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#111]/95 backdrop-blur-xl border-b border-white/10 z-40"
          >
            <div className="flex flex-col px-6 py-6 space-y-5 text-lg">
              <Link
                href="/"
                className={`${pathname === "/" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/product"
                className={`${pathname === "/product" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/categories"
                className={`${pathname === "/categories" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>

              <Link
                href="/contact"
                className={`${pathname === "/contact" ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* CART DRAWER */}
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* WISHLIST DRAWER */}
      <WishlistDrawer isOpen={isWishlistOpen} setIsOpen={setIsWishlistOpen} />
    </>
  );
}
