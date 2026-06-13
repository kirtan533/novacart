"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-4 sm:px-6 pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
            Premium Shopping Experience
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Modern
            <span className="block text-purple-400">Ecommerce</span>
          </h1>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            Shop premium fashion, electronics, and lifestyle products with a
            smooth modern shopping experience designed for the future.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold transition hover:opacity-90">
              Shop Now
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
              Explore More
            </button>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop"
              alt="shoe"
              className="w-full h-[420px] object-cover"
            />

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              New Collection
            </div>

            {/* Price Card */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
              <p className="text-sm text-gray-400">Starting From</p>

              <h3 className="text-2xl font-bold">$199</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
