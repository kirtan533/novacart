"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

import { getProducts } from "@/utils/getProducts";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    const data = await getProducts();

    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
            Featured Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Trending Products</h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
}
