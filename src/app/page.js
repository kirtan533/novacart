"use client";

import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProtectedRoutes from "@/components/ProtectedRoute";

export default function Home() {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <ProtectedRoutes>
      <main className="bg-black text-white overflow-x-hidden">
        <Hero />
        <PromoBanner />
        <Categories />
        <FeaturedProducts showHeading={true} />
        <Testimonials />
        <Newsletter />
      </main>
    </ProtectedRoutes>
  );
}
