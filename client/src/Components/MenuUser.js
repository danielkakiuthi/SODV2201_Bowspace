import React from 'react';
import { Link } from 'react-router-dom'


const MenuUser = ({ loggedUser }) => {
  return (
      <div className="menu-user">
        <Link to= {`/users/${loggedUser.id}`}>Logged in as: {loggedUser.emailUser}</Link>
        <Link to="/logout">Logout</Link>
      </div>
  );
}
 
export default MenuUser;