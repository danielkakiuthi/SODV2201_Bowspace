import React from 'react';
import { Link } from 'react-router-dom'

const MenuUser = () => {
  return (      
      <div className="menu-user">
        <Link to="/signUp">SignUp</Link>
        <Link to="/login">Login</Link>
      </div>
  );
}
 
export default MenuUser;