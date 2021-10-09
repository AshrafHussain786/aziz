import * as React from "react";
import { Link } from "gatsby";
// import { nav, leftNav, rightNav, navLinkItem } from "./styles/nav.module.css"

const Nav = () => {
    return (
        <div>
<nav className="navbar">
    <ul className="nav navbar-nav">
        <li className="nav-link"><Link to="/">Home</Link></li>          
        <li className="nav-link"><Link to="/work">Work</Link></li>        
        <li className="nav-link"><Link to="/contract">Contractors</Link></li>     
        <li className="nav-link"><Link to="/contact">Contact us</Link></li>                
    </ul>
</nav>
</div>
    )
}
export default Nav;