import React from 'react';
import { Link } from 'react-router-dom'


const MenuUser = ({ loggedUser }) => {
  var role = "";
  if(loggedUser) {
     role = loggedUser.isAdmin ? "Admin":"Student";
  }
  return (
      <div className="menu-user">
        {!loggedUser && <Link to='/login'>Login</Link>}
        {loggedUser && <Link to= {`/users/${loggedUser.id}`}>Logged in as: {loggedUser.emailUser} ({role})</Link>}
        {loggedUser && <Link to="/logout">Logout</Link>}
      </div>
  );
}
 
export default MenuUser;