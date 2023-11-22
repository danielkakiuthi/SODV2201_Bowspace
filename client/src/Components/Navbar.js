import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ loggedUser }) => {
  return (
    <nav className="navbar">
      <div className="navbarlinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/programsInformation">Programs Information</Link>        
      </div>
    </nav>
  );
}
 
export default Navbar;