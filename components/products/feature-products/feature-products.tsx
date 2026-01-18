import SectionHeader from "@/components/common/section-header/section-header"
import ProductsCard from "@/components/products/Products-card/Products-card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, StarIcon } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
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

const FeatureProducts = () => {
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
