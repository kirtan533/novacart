"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import ProductModal from "./ProductModal";
import SearchFilter from "./SearchFilter";
import { getProducts } from "@/utils/getProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";

export default function FeaturedProducts({ showHeading }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const loadMoreRef = useRef(null);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const products = data?.pages.flatMap((page) => page.products) || [];

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (isError) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Failed To Load Products</h2>
        <p className="text-gray-400">{error.message}</p>
      </div>
    );
  }

  const sortedProducts = [...filteredProducts];

  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "name-asc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "name-desc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

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
          {/* Featured Products */}
          {showHeading && (
            <>
              <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
                Featured Products
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Trending Products
              </h2>
            </>
          )}
        </motion.div>
        {/* search bar  */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-400">
            Showing {sortedProducts.length} Products
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-3xl font-bold mb-4">No Products Found</h3>

              <p className="text-gray-400">Try searching something else.</p>
            </div>
          )}
        </div>
      </div>
      {/* LOAD MORE SKELETON */}
      {isFetchingNextPage && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
}
