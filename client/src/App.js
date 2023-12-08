import React, { useState } from 'react'
import LoggedOutRoutes from './Components/Routes/LoggedOutRoutes';
import AdminLoggedInRoutes from './Components/Routes/AdminLoggedInRoutes';
import StudentLoggedInRoutes from './Components/Routes/StudentLoggedInRoutes';
import useToken from './Hooks/useToken';
import useFetch from './Hooks/useFetch';

function App() {

  const { token, setToken } = useToken("");
  const [loggedUser, setLoggedUser] = useState(() => {
    var sessionLoggedUser = window.sessionStorage.getItem("sessionLoggedUser");
    return JSON.parse(sessionLoggedUser) || null; 
  })
  
  const urlListUsers = 'http://localhost:8000/listUsers';
  const urlListPrograms = 'http://localhost:8000/listPrograms';
  const urlListTerms = 'http://localhost:8000/listTerms';
  const urlListCourses = 'http://localhost:8000/listCourses';
  const urlListAdminContacts = 'http://localhost:8000/listAdminContacts';

  var { data:users } = useFetch(urlListUsers);
  var { data:programs } = useFetch(urlListPrograms);
  var { data:terms } = useFetch(urlListTerms);
  var { data:courses } = useFetch(urlListCourses);
  var { data:adminContacts } = useFetch(urlListAdminContacts);


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

  if(adminContacts) {
    window.sessionStorage.setItem("sessionAdminContacts", JSON.stringify(adminContacts));
  }
  else {
    const sessionAdminContacts = window.sessionStorage.getItem("sessionAdminContacts");
    adminContacts = JSON.parse(sessionAdminContacts); 
  }

  console.log(`token: ${token}`);
  console.log(`loggedUser: ${JSON.stringify(loggedUser, null, 2)}`);
  // console.log(`users: ${JSON.stringify(users, null, 2)}`);
  // console.log(`programs: ${JSON.stringify(programs, null, 2)}`);
  // console.log(`terms: ${JSON.stringify(terms, null, 2)}`);
  // console.log(`courses: ${JSON.stringify(courses, null, 2)}`);
  // console.log(`adminContacts: ${JSON.stringify(adminContacts, null, 2)}`);

  
  return (
    <>
      { !token && <LoggedOutRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
        adminContacts={adminContacts}
      />}

      { token && loggedUser.isAdmin && <AdminLoggedInRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
        terms={terms}
        courses={courses}
        adminContacts={adminContacts}
      />}

      { token && !loggedUser.isAdmin && <StudentLoggedInRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
        terms={terms}
        courses={courses}
        adminContacts={adminContacts}
      />}
    </>
  );
}

export default App;
