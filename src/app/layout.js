import Navbar from "@/components/Navbar";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <Navbar />
                {children}
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </QueryProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#111111",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "16px",
              borderRadius: "18px",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
