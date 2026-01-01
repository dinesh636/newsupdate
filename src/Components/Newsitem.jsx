import React from 'react'
import images from '../assets/images.jpg'

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-white text-black mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src ? src : images} style={{height: "200px",width:"300px"}} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,100)}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Newsitem
