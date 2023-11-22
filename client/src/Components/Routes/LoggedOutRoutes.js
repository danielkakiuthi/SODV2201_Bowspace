import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login';
import Logout from '../../Pages/Logout';
import AddUser from '../../Pages/Admin/Add/AddUser';
import Header from '../Header';
import About from '../../Pages/Navbar/About';
import ProgramsInformation from '../../Pages/Navbar/ProgramsInformation';
import Contact from '../../Pages/Navbar/Contact';

const AdminLoggedOutRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs }) => {
  console.log(users);
  return (
    <>
        <BrowserRouter>
          <Header loggedUser={loggedUser}/>

          <div className="content">
            <Routes>
              {/* Public Routes */}
              <Route index path='/' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} /> } />
              <Route path='/contact' element={ <Contact /> } />

              {/* MenuUser Routes */}
              <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
              <Route path='/signUp' element={ <AddUser /> } />
              <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}
 
export default AdminLoggedOutRoutes;