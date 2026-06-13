export default function ProductDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-32 animate-pulse">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div>
          <div className="w-full h-[500px] rounded-[40px] bg-white/10" />

          <div className="flex gap-4 mt-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-[90px] h-[90px] rounded-2xl bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <div className="w-32 h-4 bg-white/10 rounded-full mb-6" />

          <div className="w-full max-w-lg h-14 bg-white/10 rounded-xl mb-8" />

          <div className="w-40 h-5 bg-white/10 rounded-full mb-10" />

          <div className="space-y-4">
            <div className="w-full h-4 bg-white/10 rounded-full" />

            <div className="w-full h-4 bg-white/10 rounded-full" />

            <div className="w-3/4 h-4 bg-white/10 rounded-full" />
          </div>

          <div className="w-40 h-14 bg-white/10 rounded-2xl mt-10" />

          <div className="w-56 h-14 bg-white/10 rounded-full mt-10" />
        </div>
      </div>
    </div>
  );
}
