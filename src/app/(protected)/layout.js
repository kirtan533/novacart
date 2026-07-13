"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProtectedRoutes from "@/components/ProtectedRoute";

export default function ProtectedLayout({ children }) {
  return (
    <ProtectedRoutes>
      <Navbar />
      {children}
      <Footer />
    </ProtectedRoutes>
  );
}
