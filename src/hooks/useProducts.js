import { useState, useEffect } from 'react'

export const useProducts = (searchTerm) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        let url = ''
        
        if (searchTerm) {
          // Use search endpoint for filtered results
          url = `https://dummyjson.com/products/search?q=${searchTerm}`
        } else {
          // Use pagination for infinite scroll
          const limit = 10
          const skip = (page - 1) * limit
          url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        }

        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch products')
        const json = await response.json()
        
        setData(prev => {
          // Reset data when searching or on first page
          if (searchTerm || page === 1) return json.products
          return [...prev, ...json.products]
        })
        
        setHasMore(!searchTerm && json.total > data.length + json.products.length)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page, searchTerm])

  return { data, loading, error, hasMore, loadMore: () => setPage(p => p + 1) }
}