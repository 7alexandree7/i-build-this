"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ClockIcon, SearchIcon, TrendingUpIcon } from 'lucide-react'
import ProductsCard from '../Products-card/Products-card'
import { product } from '@/types'
import { useMemo, useState } from 'react'

const ProductExplorer = ({ products }: { products: product[] }) => {

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [sortBy, setSortBy] = useState<"trending" | "recent" | "newest">("trending")

  const filteredProducts = useMemo(() => {
    const filtered = [...products]
    if (searchQuery.length > 0) {
      return filtered.filter((product) => product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }

    switch (sortBy) {
      case "trending":
        return filtered.sort((a, b) => b.voteCount - a.voteCount);
      case "recent":
        return filtered.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
      case "newest":
        return filtered.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
      default:
        return filtered;
    }
  }, [searchQuery, products, sortBy]);


  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 mb-8'>
        <div className='flex-1 relative'>
          <SearchIcon className='size-4 absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground' />
          <Input
            type='text'
            placeholder='Search Products...'
            className='pl-10'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='flex gap-2'>
          <Button onClick={() => setSortBy("trending")} variant={sortBy === "trending" ? "default" : "outline"}>
            <TrendingUpIcon className='size-4' />
            Trending
          </Button>
          <Button onClick={() => setSortBy("recent")} variant={sortBy === "recent" ? "default" : "outline"}>
            <ClockIcon className='size-4' />
            Recent
          </Button>
        </div>
      </div>

      <div className='mb-6'>
        <p className='text-sm text-muted-foreground'>Showing {filteredProducts.length} products</p>
      </div>

      <div className='grid-wrapper'>
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductExplorer