import React from 'react'
import Newsitem from './Newsitem'

const NavBoard = ({ articles }) => {
  return (
    <div className="news-board-section bg-white border-0 mt-3">
      <div className="d-flex justify-content-between align-items-center border-bottom mb-4">
        <div className="d-flex" style={{ marginBottom: '-2px' }}>
          <h5 className="fw-bold m-0 pb-2 flex-grow-1" style={{ borderBottom: '2px solid #222', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>TODAY'S FEATURED</h5>
        </div>
      </div>

      <div className="row">
        {/* Full width content block for more news */}
        <div className="col-md-12 px-2">
          <div className="row">
            {articles && articles.length > 0 ? (
              articles.slice(8).map((news, index) => (
                <div className="col-md-4 col-lg-3 mb-4" key={index}>
                  <Newsitem
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                    date={news.publishedAt}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-muted w-100 my-5">Loading news from API...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBoard
