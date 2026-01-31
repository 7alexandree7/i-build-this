"use client"

import { Button } from "@/components/ui/button"
import { downvoteProductAction, upvoteProductAction } from "@/lib/products/product-action";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useOptimistic, useTransition } from "react";

const VottingButton = ({ productId, productVoteCount: initialVoteCount }: { productId: number, productVoteCount: number }) => {

    const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(initialVoteCount,
        (currentCount, change: number) => Math.max(0, currentCount + change)
    );

    const [isPending, startTransition] = useTransition()

    const handleUpvote = async () => {
        startTransition(async () => {
            setOptimisticVoteCount(1);
            await upvoteProductAction(productId);
        })

    }

    const handleDownvote = async () => {
        startTransition(async () => {
            setOptimisticVoteCount(-1);
            await downvoteProductAction(productId);
        })
    }

    return (
        <div onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
        }} className="flex flex-col items-center gap-1 shrink-0">
            <Button
                onClick={handleUpvote}
                variant={"ghost"}
                size={"icon-sm"}
                className="w-8 h-8 text-primary hover:bg-primary/20 cursor-pointer"
                disabled={isPending}
                >
                <ChevronUpIcon className="size-4" />
            </Button>
            <span className="text-sm font-semibold transition-colors text-foreground">{optimisticVoteCount}</span>
            <Button
                onClick={handleDownvote}
                variant={"ghost"}
                size={"icon-sm"}
                className="w-8 h-8 text-primary hover:text-destructive cursor-pointer"
                disabled={isPending}
                >
                <ChevronDownIcon className="size-4" />
            </Button>
        </div>
    )
}

export default VottingButton
