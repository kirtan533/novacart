import FeaturedProducts from "@/components/FeaturedProducts";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Our Products
          </p>

          <h1 className="text-5xl font-bold">Explore Collection</h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Discover premium products with modern design and unbeatable quality.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <FeaturedProducts />
    </main>
  );
}
