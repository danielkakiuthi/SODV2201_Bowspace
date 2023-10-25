import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarlinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/programsInformation">Programs Information</Link>        
        <Link to="/registerStudentForTerm">Register For Term</Link>
        <Link to="/registerStudentForCourses">Register For Courses</Link>
        <Link to="/viewMyCourses">My Courses</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;