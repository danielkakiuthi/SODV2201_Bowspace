import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login';
import Logout from '../../Pages/Logout';
import AddUser from '../../Pages/Add/AddUser';
import Header from '../Header';
import About from '../../Pages/Navbar/About';
import ProgramsInformation from '../../Pages/Navbar/ProgramsInformation';
import Contact from '../../Pages/Navbar/Contact';

const LoggedOutRoutes = ({ setToken, loggedUser, setLoggedUser, users, programs }) => {
  return (
    <>
        <BrowserRouter>
          <Header loggedUser={loggedUser}/>
          <Routes>
            {/* Public Routes */}
            <Route index path='/' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation programs={programs} /> } />
            <Route path='/contact' element={ <Contact /> } />

            {/* MenuUser Routes */}
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} users={users} /> } />
            <Route path='/signUp' element={ <AddUser /> } />
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
          </Routes>
        </BrowserRouter>
      </>
  );
}
 
export default LoggedOutRoutes;