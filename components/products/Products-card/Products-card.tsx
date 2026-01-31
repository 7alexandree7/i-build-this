import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import VottingButton from "../voting-button/votting-button"
import { product } from "@/types"
import { StarIcon } from "lucide-react"

const ProductsCard = ({ product }: { product:product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-55">
                <CardHeader>
                    <div className="flex items-start gap-4">

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                {product.voteCount > 100 && <Badge className="gap-1 bg-primary text-primary-foreground">
                                    <StarIcon className="size-3" />Featured</Badge>}
                            </div>
                            <CardDescription>{product.description}</CardDescription>
                        </div>

                        <VottingButton productId={product.id} productVoteCount={product.voteCount} />

                    </div>
                </CardHeader>
                <CardFooter>
                    <div className="flex items-center gap-2">
                        {product.tags?.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductsCard
