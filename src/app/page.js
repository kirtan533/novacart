import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}
