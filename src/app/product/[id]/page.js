"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import RelatedProducts from "@/components/RelatedProducts";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);

      const data = await res.json();

      setProduct(data);
      setSelectedImage(data.thumbnail);
      const relatedRes = await fetch(
        `https://dummyjson.com/products/category/${data.category}`,
      );
      const relatedData = await relatedRes.json();
      const filteredRelatedProducts = relatedData.products.filter(
        (item) => item.id !== data.id,
      );
      setRelatedProducts(filteredRelatedProducts.slice(0, 4));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-32">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 mb-12 text-gray-300 hover:text-white transition"
      >
        <FiArrowLeft size={22} />
        Back
      </button>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE GALLERY */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
            {product.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border-2 min-w-[90px] h-[90px] transition ${
                  selectedImage === image ? "border-white" : "border-white/10"
                }`}
              >
                <img
                  src={image}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* CATEGORY */}
          <p className="uppercase tracking-[4px] text-sm text-purple-400 mb-4">
            {product.category}
          </p>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-6">
            <FiStar className="text-yellow-400" />

            <span className="text-gray-300">{product.rating} Rating</span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 leading-8 text-lg">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="mt-10 flex items-center gap-5">
            <h2 className="text-5xl font-bold">${product.price}</h2>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              In Stock
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(product)}
            className="mt-10 px-8 py-5 rounded-full bg-white text-black font-semibold flex items-center gap-3 hover:opacity-90 transition"
          >
            <FiShoppingCart size={22} />
            Add To Cart
          </button>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  );
}
