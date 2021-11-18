import React from 'react'
import { Link } from 'react-router-dom'

function Navigate() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Placement">Placement</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">AboutUs</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navigate