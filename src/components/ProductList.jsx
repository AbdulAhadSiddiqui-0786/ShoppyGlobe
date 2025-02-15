import { useProducts } from '../hooks/useProducts'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import ProductItem from './ProductItem'

const ProductList = ({ searchTerm }) => {
  const { data, loading, error, hasMore, loadMore } = useProducts(searchTerm)
  useInfiniteScroll(loadMore, hasMore, loading && !searchTerm)

  return (
    <div className="pb-8">
      {!loading && data.length === 0 && (
        <div className="text-center text-gray-500 p-8">
          No products found matching your search
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {loading && (
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {!hasMore && !loading && !searchTerm && (
        <p className="text-center text-gray-500 mt-8">No more products to load</p>
      )}
    </div>
  )
}

export default ProductList