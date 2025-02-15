import { useState } from 'react'
import ProductList from '../components/ProductList'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList searchTerm={searchTerm} />
    </div>
  )
}

export default Home