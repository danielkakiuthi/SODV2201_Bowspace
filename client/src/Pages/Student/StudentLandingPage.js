import { useNavigate } from "react-router-dom";


const StudentLandingPage = ({loggedUser, users, programs, terms, courses}) => {
  
  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));
  const navigate = useNavigate();

  return (
    <div className="landingPage">

      <h1>Student Landing Page</h1>

        <div>
          <h3>My Information</h3>
              <div>{myPrograms.map((program) => <ul key={program.id}><li>Program Name: {program.nameProgram} </li></ul>)}</div>
              <div>{myTerms.map((term) => <ul key={term.id}><li>Term #: {term.nameTerm}</li><li>Start Date: {term.startTerm}</li><li>End Date: {term.endTerm}</li></ul>)}</div>
        </div>

        <div>
          <h3>Resources</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/viewMyCourses')}>View My Courses</button></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Registration</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/registerStudentForTerm')}>Register for Term</button></td>
                <td><button onClick={() => navigate('/registerStudentForCourses')}>Register for Courses</button></td>
              </tr>
            </tbody>
          </table>
        </div>

    </div>
  );
}
 
export default StudentLandingPage;