import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={product.thumbnail} 
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <div className="flex justify-between items-center">
        <Link 
          to={`/product/${product.id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          Details
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem