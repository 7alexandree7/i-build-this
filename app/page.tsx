import FeatureProducts from "@/components/products/feature-products/feature-products";
import HeroSection from "@/components/landing-page/hero-section/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products/recently-launched-products";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureProducts />
      <RecentlyLaunchedProducts />
    </div>
  );
}
