import useFetch from '../../Hooks/useFetch';
import UsersList from '../../Components/Lists/UsersList';
import ProgramsList from '../../Components/Lists/ProgramsList';
import TermsList from '../../Components/Lists/TermsList';
import CoursesList from '../../Components/Lists/CoursesList';


const Home = () => {

  const urlListUsers = 'http://localhost:8000/listUsers';
  const urlListPrograms = 'http://localhost:8000/listPrograms';
  const urlListTerms = 'http://localhost:8000/listTerms';
  const urlListCourses = 'http://localhost:8000/listCourses';

  const {data: users, isPending: isPendingUsers, error: errorUsers} = useFetch(urlListUsers);
  const {data: programs, isPending: isPendingPrograms, error: errorPrograms} = useFetch(urlListPrograms);
  const {data: terms, isPending: isPendingTerms, error: errorTerms} = useFetch(urlListTerms);
  const {data: courses, isPending: isPendingCourses, error: errorCourses} = useFetch(urlListCourses);


  return (
    <div className="home">
      <h1>Home Page</h1>

        { errorUsers && <div>{ errorUsers }</div> }
        { isPendingUsers && <div>Loading...</div> }
        { users && <UsersList users={users} /> }

        { errorPrograms && <div>{ errorPrograms }</div> }
        { isPendingPrograms && <div>Loading...</div> }
        { programs && <ProgramsList programs={programs} /> }

        { errorTerms && <div>{ errorTerms }</div> }
        { isPendingTerms && <div>Loading...</div> }
        { terms && <TermsList terms={terms} /> }

        { errorCourses && <div>{ errorCourses }</div> }
        { isPendingCourses && <div>Loading...</div> }
        { courses && <CoursesList courses={courses} /> }
    </div>
    
  );
}
 
export default Home;