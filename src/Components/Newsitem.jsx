import React from 'react'
import defaultImg from '../assets/images.jpg';

const Newsitem = ({ title, description, src, url, date }) => {
  const displayTitle = title ? title.slice(0, 60) + '...' : 'News Title Not Available'
  const displayDesc = description ? description.slice(0, 80) + '...' : 'Description not available for this particular news article snippet.'
  const displayDate = date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString()

  return (
    <div className="card h-100 border-0 rounded-0" style={{ backgroundColor: '#fff' }}>
      <div className="position-relative">
        <img
          src={src || defaultImg}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = defaultImg
          }}
          style={{ height: '150px', width: '100%', objectFit: 'cover' }}
          className="card-img-top rounded-0"
          alt="news"
        />
        <span className="badge bg-danger rounded-0 position-absolute bottom-0 start-0 m-2" style={{ fontSize: '9px' }}>NEWS</span>
      </div>
      <div className="card-body p-0 pt-3">
        <h6 className="card-title fw-bold" style={{fontSize: '13px', lineHeight: '1.4'}}>{displayTitle}</h6>
        <div className="text-muted mb-2" style={{fontSize: '10px'}}><i className="bi bi-clock"></i> {displayDate} &nbsp;&nbsp; <i className="bi bi-chat"></i> 12</div>
        <p className="card-text text-muted" style={{fontSize: '12px'}}>{displayDesc}</p>
        <a href={url || "#"} target="_blank" rel="noreferrer" className="text-danger text-decoration-none fw-bold" style={{fontSize: '10px'}}>
          READ MORE <i className="bi bi-chevron-right" style={{fontSize: '8px'}}></i>
        </a>
      </div>
    </div>
  )
}

export default Newsitem
