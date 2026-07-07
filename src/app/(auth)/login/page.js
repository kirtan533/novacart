"use client";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-32">
      <AuthForm mode="login" />
    </main>
  );
}
