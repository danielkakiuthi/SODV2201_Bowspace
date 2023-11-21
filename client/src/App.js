import React, { useState} from 'react'
import useToken from './Hooks/useToken'
import useFetch from './Hooks/useFetch';
import LoggedOutRoutes from './Components/Routes/LoggedOutRoutes';
import LoggedInRoutes from './Components/Routes/LoggedInRoutes';


function App() {

  const { token, setToken } = useToken("");
  const [loggedUser, setLoggedUser] = useState(null);

  const urlListUsers = 'http://localhost:8000/listUsers';
  const urlListPrograms = 'http://localhost:8000/listPrograms';
  const urlListTerms = 'http://localhost:8000/listTerms';
  const urlListCourses = 'http://localhost:8000/listCourses';

  const {data: users} = useFetch(urlListUsers);
  const {data: programs} = useFetch(urlListPrograms);
  const {data: terms} = useFetch(urlListTerms);
  const {data: courses} = useFetch(urlListCourses);
  

  return (
    <>
      { !token && <LoggedOutRoutes
        setToken={setToken}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        users={users}
        programs={programs}
      />}

      { token && <LoggedInRoutes
        // token={token}
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
