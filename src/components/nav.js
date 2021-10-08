import * as React from "react";
import { Link } from "gatsby";
import { nav, leftNav, rightNav, navLinkItem } from "./styles/nav.module.css"

const Nav = () => {
    return (
        <div>
<nav className={nav}>
    <ul className={leftNav}>
        <li className={navLinkItem}><Link to="/">Home</Link></li>
    </ul>
    <ul className={rightNav}>        
        <li className={navLinkItem}><Link to="/work">Work</Link></li>        
        <li className={navLinkItem}><Link to="/contract">Contractors</Link></li>     
        <li className={navLinkItem}><Link to="/contact">Contact us</Link></li>                
    </ul>
</nav>
</div>
    )
}
export default Nav;