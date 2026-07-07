"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCategoryProducts } from "@/utils/getCategoryProducts";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCard from "@/components/ProductCard";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function CategoryProductsPage() {
  const params = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category-products", params.category],

    queryFn: () =>
      getCategoryProducts({
        category: params.category,
      }),
  });

  const products = data?.products || [];

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Failed To Load Products</h2>

          <p className="text-gray-400">{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32">
        <button className="ml-8 flex">
          <Link href="/categories">
            <FaArrowLeft />
            Back
          </Link>
        </button>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold capitalize mb-3">
            {params.category.replaceAll("-", " ")}
          </h1>

          <p className="text-gray-400 mb-12">
            {products.length} Products Found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
