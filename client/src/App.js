import React, { useState } from 'react'
import LoggedOutRoutes from './Components/Routes/LoggedOutRoutes';
import AdminLoggedInRoutes from './Components/Routes/AdminLoggedInRoutes';
import StudentLoggedInRoutes from './Components/Routes/StudentLoggedInRoutes';
import useToken from './Hooks/useToken';
import useFetch from './Hooks/useFetch';

function App() {

  const { token, setToken } = useToken("");
  const [loggedUser, setLoggedUser] = useState(() => {
    const sessionLoggedUser = window.sessionStorage.getItem("sessionLoggedUser");
    return JSON.parse(sessionLoggedUser) || null; 
  })
  
  const urlListUsers = 'http://localhost:8000/listUsers';
  const urlListPrograms = 'http://localhost:8000/listPrograms';
  const urlListTerms = 'http://localhost:8000/listTerms';
  const urlListCourses = 'http://localhost:8000/listCourses';

  var { data:users } = useFetch(urlListUsers);
  var { data:programs } = useFetch(urlListPrograms);
  var { data:terms } = useFetch(urlListTerms);
  var { data:courses } = useFetch(urlListCourses);


  if(users) {
    window.sessionStorage.setItem("sessionUsers", JSON.stringify(users));
  }
  else {
    const sessionUsers = window.sessionStorage.getItem("sessionUsers");
    users = JSON.parse(sessionUsers); 
  }

  if(programs) {
    window.sessionStorage.setItem("sessionPrograms", JSON.stringify(programs));
  }
  else {
    const sessionPrograms = window.sessionStorage.getItem("sessionPrograms");
    programs = JSON.parse(sessionPrograms);
  }

  if(terms) {
    window.sessionStorage.setItem("sessionTerms", JSON.stringify(terms));
  }
  else {
    const sessionTerms = window.sessionStorage.getItem("sessionTerms");
    terms = JSON.parse(sessionTerms); 
  }

  if(courses) {
    window.sessionStorage.setItem("sessionCourses", JSON.stringify(courses));
  }
  else {
    const sessionCourses = window.sessionStorage.getItem("sessionCourses");
    courses = JSON.parse(sessionCourses); 
  }

  console.log(`token: ${token}`);
  console.log(`loggedUser: ${loggedUser}`);
  console.log(`users: ${users}`);
  console.log(`programs: ${programs}`);
  console.log(`terms: ${terms}`);
  console.log(`courses: ${courses}`);
  
  return (
    <>
      { !token && <LoggedOutRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
      />}

      { token && loggedUser.isAdmin && <AdminLoggedInRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
        terms={terms}
        courses={courses}
      />}

      { token && !loggedUser.isAdmin && <StudentLoggedInRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
        terms={terms}
        courses={courses}
      />}
    </>
  );
}

export default App;
