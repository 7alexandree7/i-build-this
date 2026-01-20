import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react"
import Link from "next/link"


type product = InferSelectModel<typeof products>

const ProductsCard = ({ product }: { product:product }) => {
    return (
        <Link href={`/products/${product.id}`}>
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

                        <div className="flex flex-col items-center gap-1 shrink-0">
                            <Button variant={"ghost"} size={"icon-sm"} className="w-8 h-8 text-primary hover:bg-primary/20 cursor-pointer">
                            <ChevronUpIcon className="size-4" />
                            </Button>
                            <span className="text-sm font-semibold transition-colors text-foreground">{product.voteCount}</span>
                            <Button variant={"ghost"} size={"icon-sm"} className="w-8 h-8 text-primary hover:text-destructive cursor-pointer">
                                <ChevronDownIcon className="size-4" />
                            </Button>
                        </div>

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
