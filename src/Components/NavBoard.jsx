import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'   // make sure filename matches case

const NavBoard = ({ category }) => {   // ✅ FIX 1: destructure props
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles || [])) // ✅ safety
  }, [category])

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news) => (
          <NewsItem
            key={news.url}          // ✅ FIX 2: better key
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  )
}

export default NavBoard


