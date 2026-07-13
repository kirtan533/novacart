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
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cartItems, clearCart } = useCart();
  const { wishlistItems, clearWishlist } = useWishlist();

  const { user } = useAuth();

  async function handleLogout() {
    try {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("wishlistItems");
      clearCart();
      clearWishlist();
      await logout();
      toast.success("Logged Out");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Categories", href: "/categories" },
    { name: "Contact", href: "/contact" },
  ];

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
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${pathname === link.href ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
              >
                {link.name}
              </Link>
            ))}
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
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-sm border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 transition"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
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
            {/* links for mobileview */}
            <div className="flex flex-col px-6 py-6 space-y-5 text-lg">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`${pathname === link.href ? "text-purple-400" : "text-white"} hover:text-gray-300 transition`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-5 mt-5">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl border border-white/10 py-3"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-center rounded-xl border border-white/10 py-3"
                    >
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-center rounded-xl bg-white text-black py-3"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
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
