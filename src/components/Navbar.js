import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {  

    return(
        <React.Fragment>
            <nav className="navbar-container">
                <p>Store</p>
                <div className="nav-menu-wrapper">
                    <ul className="nav-menu-container">
                       <Link className="links" to='/home'><li className="nav-menu">Home</li></Link> 
                        <li className="nav-menu">About</li>
                        <li className="nav-menu">Contact</li>
                        <Link className="links" to='/cart'><li className="nav-menu">Cart</li></Link>
                    </ul>    
                </div>
                <Link className="links" to="/"><button className="nav-login-btn">Login</button></Link>
            </nav>
        </React.Fragment>
    );

}

export default Navbar;