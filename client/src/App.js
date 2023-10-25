import React, {useState} from 'react'
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
import useFetch from './Hooks/useFetch';


function App() {

  const { token, setToken } = useToken("");
  const [loggedUser, setLoggedUser] = useState(null);

  const urlListUsers = 'http://localhost:8000/listUsers';
  const urlListPrograms = 'http://localhost:8000/listPrograms';
  const urlListTerms = 'http://localhost:8000/listTerms';
  const urlListCourses = 'http://localhost:8000/listCourses';

  const {data: users, isPending: isPendingUsers, error: errorUsers} = useFetch(urlListUsers);
  const {data: programs, isPending: isPendingPrograms, error: errorPrograms} = useFetch(urlListPrograms);
  const {data: terms, isPending: isPendingTerms, error: errorTerms} = useFetch(urlListTerms);
  const {data: courses, isPending: isPendingCourses, error: errorCourses} = useFetch(urlListCourses);


  if(!token) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/signUp' element={ <AddUser /> } />
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
          </Routes>
        </BrowserRouter>
      </>
    ) 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header loggedUser={loggedUser}/>

        <div className="content">
          <Routes>
            {/* Navbar Routes */}
            <Route index path='/' element={ <Home users={users} programs={programs} terms={terms} courses={courses} /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/programsInformation' element={ <ProgramsInformation /> } />
            <Route path='/contact' element={ <Contact /> } />

            
            {/* MenuUser Routes */}
            <Route path='/logout' element={ <Logout setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            <Route path='/login' element={ <Login setToken={setToken} setLoggedUser={setLoggedUser} /> } />
            
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
            <Route path='/registerStudentForTerm' element={ <RegisterStudentForTerm loggedUser={loggedUser} /> } />
            <Route path='/registerStudentForCourses' element={ <RegisterStudentForCourses loggedUser={loggedUser} /> } />
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

export default App;
