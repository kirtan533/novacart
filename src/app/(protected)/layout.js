"use client";

import Footer from "@/components/Footer";
import ProtectedRoutes from "@/components/ProtectedRoute";

export default function ProtectedLayout({ children }) {
  return (
    <ProtectedRoutes>
      {children}
      <Footer />
    </ProtectedRoutes>
  );
}
