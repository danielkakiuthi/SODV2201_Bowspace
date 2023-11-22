import { useNavigate } from "react-router-dom";


const StudentLandingPage = ({loggedUser, users, programs, terms, courses}) => {
  
  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));
  const navigate = useNavigate();

  return (
    <div className="studentLandingPage">
      <h1>Student Landing Page</h1>
      {myPrograms.map((program) =>
        <ul key={program.id}>
          <li>Program Name: {program.nameProgram} </li>
        </ul>
      )}
      {myTerms.map((term) =>
        <ul key={term.id}>
          <li>Term #: {term.nameTerm}</li>
          <li>Start Date: {term.startTerm}</li>
          <li>End Date: {term.endTerm}</li>
        </ul>
      )}

      <table>
          <tr>
            <td><button onClick={() => navigate('/registerStudentForTerm')}>Register for Term</button></td>
            <td><button onClick={() => navigate('/registerStudentForCourses')}>Register for Courses</button></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td><button onClick={() => navigate('/viewMyCourses')}>View My Courses</button></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        
        {/* { loggedUser && !loggedUser.isAdmin && <Link to="/registerStudentForTerm">Register For Term</Link>}
        { loggedUser && !loggedUser.isAdmin && <Link to="/registerStudentForCourses">Register For Courses</Link>}
        { loggedUser && !loggedUser.isAdmin && <Link to="/viewMyCourses">My Courses</Link>} */}

    </div>
    
  );
}
 
export default StudentLandingPage;