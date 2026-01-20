"use cache";

import SectionHeader from "@/components/common/section-header/section-header"
import ProductsCard from "@/components/products/Products-card/Products-card"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products/product-select"
import { ArrowRightIcon, StarIcon } from "lucide-react"
import Link from "next/link"


const FeatureProducts = async () => {

    const featuredProducts = await getFeaturedProducts();
    return (
        <div className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader
                        title="Featured Today"
                        icon={StarIcon}
                        description="Top picks from our community this week"
                    />
                    <Button asChild className="hiddem sm:flex" variant={"outline"}>
                        <Link href="/explore">View All
                        <ArrowRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product) => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureProducts
