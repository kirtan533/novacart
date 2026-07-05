"use client";

import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?redirect=${pathname}`);
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Checking Authentication...
    </div>;
  }
  if (!user) return null;
  return children;
}
