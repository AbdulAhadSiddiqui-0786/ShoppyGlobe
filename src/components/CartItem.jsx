import PropTypes from 'prop-types'

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
          className="w-20 p-1 border rounded"
        />
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired
}

export default CartItem