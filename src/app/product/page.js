import FeaturedProducts from "@/components/FeaturedProducts";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING */}
        <div className="relative text-center mb-16">
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />{" "}
          </div>
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Our Products
          </p>
          <h1 className="text-5xl font-bold"> Explore Collection </h1>{" "}
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Discover premium products with modern design and unbeatable quality.
          </p>
        </div>
      </div>
      {/* PRODUCTS */} <FeaturedProducts showHeading={false} />{" "}
    </main>
  );
}
