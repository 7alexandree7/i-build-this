import EmptyState from "@/components/common/empty-state/empty-state"
import SectionHeader from "@/components/common/section-header/section-header"
import ProductsCard from "@/components/products/Products-card/Products-card"
import { CalendarIcon, RocketIcon } from "lucide-react"

const recentlyLaunchedProducts = [
    {
        id: 1,
        name: "unfast ayo",
        description: "example description 1",
        tags: ["SAS", "Pricing", "Global"],
        votes: 615,
        isFeatured: true
    },
    {
        id: 2,
        name: "hyper un",
        description: "example description 2",
        tags: ["Nextjs", "Reactjs", "Ruby"],
        votes: 190,
        isFeatured: false
    },
    {
        id: 3,
        name: "aphelios sigma",
        description: "example description 3",
        tags: ["gume", "colletora", "runan"],
        votes: 450,
        isFeatured: true
    },
]

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
