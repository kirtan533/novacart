"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  /* LOAD FROM LOCAL STORAGE */
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");

    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  /* SAVE TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  /* ADD / REMOVE */
  function toggleWishlist(product) {
    const exists = wishlistItems.find((item) => item.id === product.id);

    if (exists) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));

      toast.error(`${product.title} removed from wishlist`);
    } else {
      setWishlistItems([...wishlistItems, product]);

      toast.success(`${product.title} added to wishlist`);
    }
  }

  /* CHECK ITEM */
  function isInWishlist(id) {
    return wishlistItems.some((item) => item.id === id);
  }

  //clear wishlist
  function clearWishlist() {
    setWishlistItems([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
