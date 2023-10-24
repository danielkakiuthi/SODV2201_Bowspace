import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import Login from './Pages/Login';
import HelpForm from './Pages/Contact';
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

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <div className="content">
          <Routes>
            {/* Basic Routes */}
            <Route index path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/contact' element={ <HelpForm /> } />
            

            {/* Add Routes */}
            <Route path='/adduser' element={ <AddUser /> } />
            <Route path='/addprogram' element={ <AddProgram /> } />
            <Route path='/addterm' element={ <AddTerm /> } />
            <Route path='/addcourse' element={ <AddCourse /> } />
            
            {/* Edit Routes */}
            <Route path='/users/:id' element={ <UserDetails /> } />
            <Route path='/programs/:id' element={ <ProgramDetails /> } />
            <Route path='/terms/:id' element={ <TermDetails /> } />
            <Route path='/courses/:id' element={ <CourseDetails /> } />
            
            {/* Custom Routes */}
            <Route path='/registerstudentforterm' element={ <RegisterStudentForTerm /> } />
            <Route path='/registerstudentforcourses' element={ <RegisterStudentForCourses /> } />
            <Route path='/viewmycourses' element={ <ViewMyCourses /> } />
            
            {/* Default Route */}
            <Route path='/*' element={ <Error /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
