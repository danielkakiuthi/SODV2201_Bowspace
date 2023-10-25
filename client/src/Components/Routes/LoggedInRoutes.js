import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Home from '../../Pages/Navbar/Home';
import About from '../../Pages/Navbar/About';
import ProgramsInformation from '../../Pages/Navbar/ProgramsInformation';
import Login from '../../Pages/Login';
import Logout from '../../Pages/Logout';
import Contact from '../../Pages/Navbar/Contact';
import AddUser from '../../Pages/Add/AddUser';
import AddProgram from '../../Pages/Add/AddProgram';
import AddTerm from '../../Pages/Add/AddTerm';
import AddCourse from '../../Pages/Add/AddCourse';
import UserDetails from '../../Pages/Details/UserDetails';
import ProgramDetails from '../../Pages/Details/ProgramDetails';
import TermDetails from '../../Pages/Details/TermDetails';
import CourseDetails from '../../Pages/Details/CourseDetails';
import RegisterStudentForTerm from '../../Pages/RegisterStudentForTerm';
import RegisterStudentForCourses from '../../Pages/RegisterStudentForCourses';
import ViewMyCourses from '../../Pages/ViewMyCourses';
import Error from '../../Pages/Error';

const LoggedInRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs, terms, courses }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <Home users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} /> } />
            <Route path='/contact' element={ <Contact /> } />

            
            {/* MenuUser Routes */}
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
            <Route path='/signUp' element={ <AddUser /> } />
            
            {/* Add Routes */}
            <Route path='/addUser' element={ <AddUser /> } />
            <Route path='/addProgram' element={ <AddProgram /> } />
            <Route path='/addTerm' element={ <AddTerm /> } />
            <Route path='/addCourse' element={ <AddCourse /> } />
            
            {/* Details Routes */}
            <Route path='/users/:id' element={ <UserDetails /> } />
            <Route path='/programs/:id' element={ <ProgramDetails /> } />
            <Route path='/terms/:id' element={ <TermDetails /> } />
            <Route path='/courses/:id' element={ <CourseDetails loggedUser={loggedUser} /> } />
            
            {/* Custom Routes */}
            <Route path='/registerStudentForTerm' element={ <RegisterStudentForTerm loggedUser={loggedUser} terms={terms} /> } />
            <Route path='/registerStudentForCourses' element={ <RegisterStudentForCourses loggedUser={loggedUser} courses={courses} /> } />
            <Route path='/viewMyCourses' element={ <ViewMyCourses loggedUser={loggedUser} programs={programs} terms={terms} courses={courses} /> } />
            
            {/* Default Route */}
            <Route path='/*' element={ <Error /> } />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
 
export default LoggedInRoutes;