"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/utils/getCategories";
import CardCategories from "@/components/CardCategories";

export default function CategoriesPage() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">Categories</h1>
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-gray-400 mb-4">
            Browse Categories
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">Find What You Need</h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Explore products organized into carefully curated categories.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CardCategories key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}
