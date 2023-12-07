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
import ViewMyPastCourses from '../../Pages/Student/ViewMyPastCourses';
import Error from '../../Pages/Error';
import DetailsCourse from '../../Pages/Admin/Details/DetailsCourse';
import DetailsProgram from '../../Pages/Admin/Details/DetailsProgram';
import DetailsTerm from '../../Pages/Admin/Details/DetailsTerm';
import DetailsUser from '../../Pages/Admin/Details/DetailsUser';
import ListCourses from '../../Pages/Admin/Lists/ListCourses';
import ListPrograms from '../../Pages/Admin/Lists/ListPrograms';
import ListTerms from '../../Pages/Admin/Lists/ListTerms';
import ListUsers from '../../Pages/Admin/Lists/ListUsers';


const StudentLoggedInRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs, terms, courses }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="configuredRoutes">
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <StudentLandingPage loggedUser={loggedUser} users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} loggedUser={loggedUser} /> } />
            <Route path='/contact' element={ <Contact /> } />

            {/* MenuUser Routes */}
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
            
            {/* Details Routes */}
            <Route path='/users/:id' element={ <DetailsUser /> } />
            <Route path='/programs/:id' element={ <DetailsProgram /> } />
            <Route path='/terms/:id' element={ <DetailsTerm /> } />
            <Route path='/courses/:id' element={ <DetailsCourse loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />

            {/* List Routes */}
            <Route path='/listUsers' element={ <ListUsers users={users} /> } />
            <Route path='/listPrograms' element={ <ListPrograms programs={programs} loggedUser={loggedUser} /> } />
            <Route path='/listTerms' element={ <ListTerms terms={terms} /> } />
            <Route path='/listCourses' element={ <ListCourses courses={courses} /> } />

            {/* Custom Routes */}
            <Route path='/registerStudentForTerm' element={ <RegisterStudentForTerm loggedUser={loggedUser} terms={terms} /> } />
            <Route path='/registerStudentForCourses' element={ <RegisterStudentForCourses loggedUser={loggedUser} courses={courses} /> } />
            <Route path='/viewMyCourses' element={ <ViewMyCourses loggedUser={loggedUser} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/viewMyPastCourses' element={ <ViewMyPastCourses loggedUser={loggedUser} programs={programs} terms={terms} courses={courses} /> } />
            
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