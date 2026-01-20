"use cache";

import EmptyState from "@/components/common/empty-state/empty-state"
import SectionHeader from "@/components/common/section-header/section-header"
import ProductsCard from "@/components/products/Products-card/Products-card"
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select"
import { CalendarIcon, RocketIcon } from "lucide-react"

const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();


const RecentlyLaunchedProducts = () => {
    
    return (
        <section className="py-20">
            <div className="wrapper space-y-12">
                <SectionHeader
                    title="Recently Launched"
                    icon={RocketIcon}
                    description="Discover the latest products from our community"
                />
                {recentlyLaunchedProducts.length > 0 ? (
                    <div className="grid-wrapper">
                        {recentlyLaunchedProducts.map((product) => (
                            <ProductsCard key={product.id} product={product} />
                        ))}
                    </div>
                ): (
                    <EmptyState
                        message="No products launched in the last week. Check soon for new launches"
                        icon={CalendarIcon}
                     />
                )}
            </div>
        </section>
    )
}

export default RecentlyLaunchedProducts
