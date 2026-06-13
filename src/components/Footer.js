"use client";

import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 sm:px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold mb-5">NovaCart</h2>

            <p className="text-gray-400 leading-8">
              Premium ecommerce experience with modern design, smooth shopping,
              and stylish collections for everyone.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-6">
              <button className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FiFacebook size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FiInstagram size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FiTwitter size={18} />
              </button>

              <button className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                <FiGithub size={18} />
              </button>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Company</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <button className="hover:text-white transition text-left">
                About Us
              </button>

              <button className="hover:text-white transition text-left">
                Careers
              </button>

              <button className="hover:text-white transition text-left">
                Contact
              </button>

              <button className="hover:text-white transition text-left">
                Blog
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Products</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <button className="hover:text-white transition text-left">
                Fashion
              </button>

              <button className="hover:text-white transition text-left">
                Electronics
              </button>

              <button className="hover:text-white transition text-left">
                Lifestyle
              </button>

              <button className="hover:text-white transition text-left">
                Accessories
              </button>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Support</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <button className="hover:text-white transition text-left">
                Help Center
              </button>

              <button className="hover:text-white transition text-left">
                Terms & Conditions
              </button>

              <button className="hover:text-white transition text-left">
                Privacy Policy
              </button>

              <button className="hover:text-white transition text-left">
                Shipping Info
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} NovaCart. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
