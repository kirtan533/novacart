"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTrash2 } from "react-icons/fi";
import { useWishlist } from "@/context/WishlistContext";
import ProtectedRoutes from "./ProtectedRoute";

export default function WishlistDrawer({ isOpen, setIsOpen }) {
  const { wishlistItems, toggleWishlist } = useWishlist();

  return (
    <>
      <ProtectedRoutes>
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
                className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-[#0a0a0a] border-l border-white/10 z-[100] flex flex-col"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-2xl font-bold">Wishlist</h2>

                  <button onClick={() => setIsOpen(false)} className="text-2xl">
                    <FiX />
                  </button>
                </div>

                {/* ITEMS */}
                <div className="flex-1 overflow-y-auto p-6 space-y-5">
                  {wishlistItems.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      Your wishlist is empty
                    </div>
                  ) : (
                    wishlistItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/product/${item.id}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex gap-4 border border-white/10 rounded-3xl p-4 mb-5 hover:bg-white/5 transition">
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

                            {/* REMOVE */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();

                                toggleWishlist(item);
                              }}
                              className="mt-4 text-red-400 flex items-center gap-2 text-sm"
                            >
                              <FiTrash2 />
                              Remove
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </ProtectedRoutes>
    </>
  );
}
