import UsersList from '../../Components/Lists/UsersList';
import ProgramsList from '../../Components/Lists/ProgramsList';
import TermsList from '../../Components/Lists/TermsList';
import CoursesList from '../../Components/Lists/CoursesList';


const Home = ({users, programs, terms, courses}) => {

  return (
    <div className="home">
      <h1>Home Page</h1>

        { users && <UsersList users={users} /> }

        { programs && <ProgramsList programs={programs} /> }

        { terms && <TermsList terms={terms} /> }

        { courses && <CoursesList courses={courses} /> }
    </div>
    
  );
}
 
export default Home;