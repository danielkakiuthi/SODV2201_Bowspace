import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './Hooks/useToken'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Navbar/Home';
import About from './Pages/Navbar/About';
import ProgramsInformation from './Pages/Navbar/ProgramsInformation';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Contact from './Pages/Navbar/Contact';
import AddUser from './Pages/Add/AddUser';
import AddProgram from './Pages/Add/AddProgram';
import AddTerm from './Pages/Add/AddTerm';
import AddCourse from './Pages/Add/AddCourse';
import UserDetails from './Pages/Details/UserDetails';
import ProgramDetails from './Pages/Details/ProgramDetails';
import TermDetails from './Pages/Details/TermDetails';
import CourseDetails from './Pages/Details/CourseDetails';
import RegisterStudentForTerm from './Pages/RegisterStudentForTerm';
import RegisterStudentForCourses from './Pages/RegisterStudentForCourses';
import ViewMyCourses from './Pages/ViewMyCourses';
import Error from './Pages/Error';


function App() {

  const { token, setToken } = useToken();


  if(!token) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={ <Login setToken={setToken} /> } />
            <Route path='/login' element={ <Login setToken={setToken} /> } />
            <Route path='/signUp' element={ <AddUser /> } />
          </Routes>
        </BrowserRouter>
      </>
    ) 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            {/* Navbar Routes */}
            <Route index path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation /> } />
            <Route path='/contact' element={ <Contact /> } />

            
            {/* MenuUser Routes */}
            <Route path='/signUp' element={ <AddUser /> } />
            <Route path='/login' element={ <Login setToken={setToken} /> } />
            <Route path='/logout' element={ <Logout /> } />

            {/* Add Routes */}
            <Route path='/addUser' element={ <AddUser /> } />
            <Route path='/addProgram' element={ <AddProgram /> } />
            <Route path='/addTerm' element={ <AddTerm /> } />
            <Route path='/addCourse' element={ <AddCourse /> } />
            
            {/* Details Routes */}
            <Route path='/users/:id' element={ <UserDetails /> } />
            <Route path='/programs/:id' element={ <ProgramDetails /> } />
            <Route path='/terms/:id' element={ <TermDetails /> } />
            <Route path='/courses/:id' element={ <CourseDetails /> } />
            
            {/* Custom Routes */}
            <Route path='/registerStudentForTerm' element={ <RegisterStudentForTerm /> } />
            <Route path='/registerStudentForCourses' element={ <RegisterStudentForCourses /> } />
            <Route path='/viewMyCourses' element={ <ViewMyCourses /> } />
            
            {/* Default Route */}
            <Route path='/*' element={ <Error /> } />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
