"use cache";

import SectionHeader from '@/components/common/section-header/section-header'
import ProductExplorer from '@/components/products/product-explorer/product-explorer'
import { getAllApprovedProducts } from '@/lib/products/product-select';
import { CompassIcon } from 'lucide-react'

const ExplorePage = async () => {

  const products = await getAllApprovedProducts();
  
  return (
    <div className='py-20'>
      <div className='wrapper'>
        <div className='mb-12'>
          <SectionHeader title="Explore All Products" icon={CompassIcon} description="Browser and discover amazing projects from our community" />
        </div>
        <ProductExplorer products={products} />
      </div>
    </div>
  )
}

export default ExplorePage
