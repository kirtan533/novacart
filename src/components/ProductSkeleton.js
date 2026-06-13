export default function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
      <div className="w-full h-64 bg-white/10" />

      <div className="p-5">
        <div className="w-24 h-4 bg-white/10 rounded mb-4" />

        <div className="w-full h-6 bg-white/10 rounded mb-3" />

        <div className="w-full h-4 bg-white/10 rounded mb-2" />

        <div className="w-3/4 h-4 bg-white/10 rounded mb-6" />

        <div className="flex justify-between items-center">
          <div className="w-20 h-8 bg-white/10 rounded" />

          <div className="w-12 h-12 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}
