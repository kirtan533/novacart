"use client";

import { useCart } from "@/context/CartContext";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const router = useRouter();

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
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Shipping Details</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* FIRST NAME */}
              <input
                type="text"
                placeholder="First Name"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

              {/* LAST NAME */}
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="sm:col-span-2 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

              {/* ADDRESS */}
              <input
                type="text"
                placeholder="Street Address"
                className="sm:col-span-2 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

              {/* CITY */}
              <input
                type="text"
                placeholder="City"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

              {/* ZIP */}
              <input
                type="text"
                placeholder="ZIP Code"
                className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />
            </div>
          </div>
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

            {/* TOTALS */}
            <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>

                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>

                <span>$20.00</span>
              </div>

              <div className="flex justify-between text-2xl font-bold pt-4">
                <span>Total</span>

                <span>${(totalPrice + 20).toFixed(2)}</span>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-8 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
