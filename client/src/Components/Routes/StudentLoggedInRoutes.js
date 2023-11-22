import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import About from '../../Pages/Navbar/About';
import ProgramsInformation from '../../Pages/Navbar/ProgramsInformation';
import Login from '../../Pages/Login';
import Logout from '../../Pages/Logout';
import Contact from '../../Pages/Navbar/Contact';
import StudentLandingPage from '../../Pages/Student/StudentLandingPage';
import RegisterStudentForTerm from '../../Pages/Student/RegisterStudentForTerm';
import RegisterStudentForCourses from '../../Pages/Student/RegisterStudentForCourses';
import ViewMyCourses from '../../Pages/Student/ViewMyCourses';
import Error from '../../Pages/Error';

const StudentLoggedInRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs, terms, courses }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <StudentLandingPage users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} /> } />
            <Route path='/contact' element={ <Contact /> } />

            {/* MenuUser Routes */}
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
            
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
 
export default StudentLoggedInRoutes;