import FeatureProducts from "@/components/products/feature-products/feature-products";
import HeroSection from "@/components/landing-page/hero-section/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products/recently-launched-products";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureProducts />
      <Suspense fallback={<div
        className="wrapper flex items-center gap-2">
        Loading Recently Launched Products
        <LoaderIcon className="animate-spin size-4" />
      </div>}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}
