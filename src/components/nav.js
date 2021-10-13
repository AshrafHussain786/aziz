import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">      
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contract" className="nav-link">
              Contractors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
