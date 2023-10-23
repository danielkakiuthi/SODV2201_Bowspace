import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <h1>Bowspace</h1>
      <div className="links"></div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
 
export default Menu;