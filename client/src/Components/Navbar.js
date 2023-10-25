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
        { loggedUser && <Link to="/registerStudentForTerm">Register For Term</Link>}
        { loggedUser && <Link to="/registerStudentForCourses">Register For Courses</Link>}
        { loggedUser && <Link to="/viewMyCourses">My Courses</Link>}
      </div>
    </nav>
  );
}
 
export default Navbar;