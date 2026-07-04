"use client";

import { useState } from "react";
import { signup, login } from "@/services/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthForm({ mode }) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return toast.error(`Please fill all fields`);
    }
    if (password.length < 6) {
      return toast.error(`Password must be at least 6 characters`);
    }

    try {
      setLoading(true);

      if (mode === "signup") {
        await signup(email, password);
        toast.success(`Account created successfully`);
      } else {
        await login(email, password);
        toast.success(`Welcome Back`);
      }

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 outline-none focus:border-white/30"
        />

        {/* PASSWORD */}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 pr-14 outline-none focus:border-white/30"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <button
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {loading
            ? "Please Wait..."
            : mode === "signup"
              ? "Create Account"
              : "Login"}
        </button>
      </form>

      <div className="text-center mt-8 text-gray-400">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-white">
              Login
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link href="/signup" className="text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
