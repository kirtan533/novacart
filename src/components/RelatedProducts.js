"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function RelatedProducts({ products }) {
  return (
    <section className="mt-32">
      {/* HEADING */}
      <div className="mb-12">
        <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
          Related Products
        </p>

        <h2 className="text-4xl font-bold">You May Also Like</h2>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <Link href={`/product/${item.id}`}>
              <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden">
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-sm text-gray-400 capitalize mb-2">
                    {item.category}
                  </p>

                  <h3 className="text-xl font-semibold line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <h4 className="text-2xl font-bold">${item.price}</h4>

                    <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
