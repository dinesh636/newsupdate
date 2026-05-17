import React, { useState, useEffect } from 'react'
import TopBar from './Components/TopBar'
import HeaderLogo from './Components/HeaderLogo'
import TopHeadlines from './Components/TopHeadlines'
import MainMenu from './Components/MainMenu'
import FeaturedNews from './Components/FeaturedNews'
import BreakingNews from './Components/BreakingNews'
import NavBoard from './Components/NavBoard'
import './index.css'

const App = () => {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCategory = category === 'home' || category === 'general' ? 'general' : category;
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${fetchCategory}/us.json`;

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles || []))
      .catch(err => console.log(err))
  }, [category])

  return (
    <div className="main-wrapper">
      <div className="main-container bg-white shadow-sm border-0">
        <TopBar />
        <HeaderLogo />
        <TopHeadlines articles={articles} />
        <MainMenu setcategory={setCategory} category={category} />
        <FeaturedNews articles={articles} />
        <BreakingNews articles={articles} />
        <NavBoard articles={articles} />
      </div>
    </div>
  )
}

export default App
