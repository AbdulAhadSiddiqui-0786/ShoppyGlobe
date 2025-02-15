import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  // Updated selector to match new Redux state structure
  const cartItems = useSelector(state => state.cart.items)

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ShoppyGlobe</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/cart" className="hover:text-gray-300 flex items-center gap-1">
            {/* Added null check for safety */}
            Cart ({cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0})
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header