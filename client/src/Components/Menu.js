import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
 
export default Menu;