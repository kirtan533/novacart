"use client";

import { useCart } from "@/context/CartContext";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const { cartItems, totalPrice, clearCart } = useCart();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function applyCoupon() {
    if (coupon === "SAVE10") {
      setDiscount(totalPrice * 0.1);

      toast.success("Coupon applied successfully");
    } else {
      setDiscount(0);

      toast.error("Invalid coupon code");
    }
  }

  async function onSubmit(data) {
    setIsPlacingOrder(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();

    router.push("/success");
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-bold mb-6">Your Cart is Empty</h1>

          <p className="text-gray-400 text-lg mb-10">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            onClick={() => router.push("/")}
            className="px-8 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-32">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-3 mb-12 text-gray-300 hover:text-white transition"
      >
        <FiArrowLeft size={22} />
        Back To Products
      </button>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-10">Checkout</h1>

          {/* SHIPPING FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-8">Shipping Details</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* FIRST NAME */}
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "first name is required",
                    minLength: {
                      value: 3,
                      message: "minimum 3 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />

                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* LAST NAME */}
              <div>
                <input
                  type="text"
                  placeholder="last Name"
                  {...register("lastName", {
                    required: "last name is required",
                    minLength: {
                      value: 3,
                      message: "minimum 3 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />

                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter valid email",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* ADDRESS */}
              <div>
                <input
                  type="text"
                  placeholder="address"
                  {...register("address", {
                    required: "address is required",
                    minLength: {
                      value: 3,
                      message: "minimum 12 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />

                {errors.address && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.address.message}
                  </p>
                )}
              </div>
              {/* CITY */}
              <div>
                <input
                  type="text"
                  placeholder="city"
                  {...register("city", {
                    required: "city is required",
                    minLength: {
                      value: 3,
                      message: "minimum 5 characters",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />

                {errors.city && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.city.message}
                  </p>
                )}
              </div>
              {/* ZIP */}
              <div>
                <input
                  type="text"
                  placeholder="address"
                  id="u8m3rv"
                  {...register("zip", {
                    required: "ZIP is required",

                    minLength: {
                      value: 5,
                      message: "Minimum 5 digits",
                    },
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
                />
                {errors.zip && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="sticky top-32 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>
            {/* ITEMS */}
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="line-clamp-1">{item.title}</h3>

                    <p className="text-sm text-gray-400">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm tracking-wider text-center mt-2 text-gray-400 mb-4">
              Use <span className="text-white font-semibold">SAVE10</span> to
              get 10% OFF
            </p>
            {/* COUPON */}
            <div className="mt-8 flex gap-3">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />
              <button
                onClick={applyCoupon}
                className="px-6 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
              >
                Apply
              </button>
            </div>
            {/* TOTALS */}
            <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Discount</span>
                <span> -${discount.toFixed(2)} </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>

                <span>$20.00</span>
              </div>

              <div className="flex justify-between text-2xl font-bold pt-4">
                <span>Total</span>

                <span>${(totalPrice - discount + 20).toFixed(2)}</span>
              </div>
            </div>
            {/* BUTTON */}
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isPlacingOrder}
              className={`w-full mt-8 py-5 rounded-full font-semibold transition ${isValid ? "bg-white text-black hover:opacity-90" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
            >
              {isPlacingOrder ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
