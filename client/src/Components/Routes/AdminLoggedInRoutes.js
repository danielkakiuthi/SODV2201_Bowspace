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
import DetailsUser from '../../Pages/Admin/Details/DetailsUser';
import DetailsProgram from '../../Pages/Admin/Details/DetailsProgram';
import DetailsTerm from '../../Pages/Admin/Details/DetailsTerm';
import DetailsCourse from '../../Pages/Admin/Details/DetailsCourse';
import ListUsers from '../../Pages/Admin/Lists/ListUsers';
import ListPrograms from '../../Pages/Admin/Lists/ListPrograms';
import ListTerms from '../../Pages/Admin/Lists/ListTerms';
import ListCourses from '../../Pages/Admin/Lists/ListCourses';
import Error from '../../Pages/Error';

const AdminLoggedInRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs, terms, courses }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="configuredRoutes">
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <AdminLandingPage users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} loggedUser={loggedUser} /> } />
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
            <Route path='/users/:id' element={ <DetailsUser /> } />
            <Route path='/programs/:id' element={ <DetailsProgram /> } />
            <Route path='/terms/:id' element={ <DetailsTerm /> } />
            <Route path='/courses/:id' element={ <DetailsCourse loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />

            {/* List Routes */}
            <Route path='/listUsers' element={ <ListUsers users={users} /> } />
            <Route path='/listPrograms' element={ <ListPrograms programs={programs} loggedUser={loggedUser} /> } />
            <Route path='/listTerms' element={ <ListTerms terms={terms} /> } />
            <Route path='/listCourses' element={ <ListCourses courses={courses} /> } />
            
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