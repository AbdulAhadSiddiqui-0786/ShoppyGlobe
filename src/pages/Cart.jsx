import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import { removeFromCart, updateQuantity } from '../store/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  // Corrected selector to match new Redux state structure
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const totalAmount = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) || 0

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems?.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Your cart is empty</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems?.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => dispatch(removeFromCart(item.id))}
                onQuantityChange={(newQty) => 
                  dispatch(updateQuantity({ id: item.id, quantity: newQty }))
                }
              />
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="text-xl font-bold mb-2">
              Total: ₹{totalAmount.toFixed(2)}
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart