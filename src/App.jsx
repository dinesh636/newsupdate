import React, { useState, useEffect, useRef } from 'react'
import TopBar from './Components/TopBar'
import HeaderLogo from './Components/HeaderLogo'
import TopHeadlines from './Components/TopHeadlines'
import MainMenu from './Components/MainMenu'
import FeaturedNews from './Components/FeaturedNews'
import BreakingNews from './Components/BreakingNews'
import NavBoard from './Components/NavBoard'
import './index.css'

const App = () => {
  const [category, setCategory] = useState('general')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const cacheRef = useRef({})

  useEffect(() => {
    const fetchCategory = category === 'home' || category === 'general' ? 'general' : category
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${fetchCategory}/us.json`

    if (cacheRef.current[fetchCategory]) {
      setArticles(cacheRef.current[fetchCategory])
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        const fetchedArticles = data?.articles || []
        cacheRef.current[fetchCategory] = fetchedArticles
        setArticles(fetchedArticles)
        setLoading(false)
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err)
          setError('Unable to load news. Please refresh or try another category.')
          setArticles([])
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [category])

  return (
    <div className="main-wrapper">
      <div className="main-container bg-white shadow-sm border-0">
        <TopBar />
        <HeaderLogo />
        {error && (
          <div className="text-center text-danger py-3" style={{ fontSize: '13px' }}>
            {error}
          </div>
        )}
        <TopHeadlines articles={articles} loading={loading} />
        <MainMenu setcategory={setCategory} category={category} />
        <FeaturedNews articles={articles} loading={loading} />
        <BreakingNews articles={articles} />
        <NavBoard articles={articles} />
      </div>
    </div>
  )
}

export default App
