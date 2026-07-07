"use client";

import ProtectedRoutes from "@/components/ProtectedRoute";

export default function ProtectedLayout({ children }) {
  return <ProtectedRoutes>{children}</ProtectedRoutes>;
}
