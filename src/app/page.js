import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <PromoBanner />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
