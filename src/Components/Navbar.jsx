import React from 'react'

const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">My App</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           <li className="nav-item">
              <div className="nav-link" onClick={()=>setcategory("health")} > health</div>
              </li>
               <li className="nav-item">
              <div className="nav-link" onClick={()=>setcategory("Business")}>Business</div>
              </li>
               <li className="nav-item">
              <div  className="nav-link"onClick={()=>setcategory("Technology")}>Technology</div>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
