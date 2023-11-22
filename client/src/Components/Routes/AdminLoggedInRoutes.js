import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import About from '../../Pages/Navbar/About';
import ProgramsInformation from '../../Pages/Navbar/ProgramsInformation';
import Login from '../../Pages/Login';
import Logout from '../../Pages/Logout';
import Contact from '../../Pages/Navbar/Contact';
import AdminLandingPage from '../../Pages/Admin/AdminLandingPage';
import AddUser from '../../Pages/Admin/Add/AddUser';
import AddProgram from '../../Pages/Admin/Add/AddProgram';
import AddTerm from '../../Pages/Admin/Add/AddTerm';
import AddCourse from '../../Pages/Admin/Add/AddCourse';
import UserDetails from '../../Pages/Admin/Details/UserDetails';
import ProgramDetails from '../../Pages/Admin/Details/ProgramDetails';
import TermDetails from '../../Pages/Admin/Details/TermDetails';
import CourseDetails from '../../Pages/Admin/Details/CourseDetails';
import Error from '../../Pages/Error';

const AdminLoggedInRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs, terms, courses }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <AdminLandingPage users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} /> } />
            <Route path='/contact' element={ <Contact /> } />

            {/* MenuUser Routes */}
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
            
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
            
            {/* Default Route */}
            <Route path='/*' element={ <Error /> } />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
 
export default AdminLoggedInRoutes;