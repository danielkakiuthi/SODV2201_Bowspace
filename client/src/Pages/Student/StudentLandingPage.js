import { useNavigate } from "react-router-dom";


const StudentLandingPage = ({loggedUser, users, programs, terms, courses}) => {
  
  if(loggedUser!==null) {
    console.log(`loggedUserEmail from studentLandingPage: ${loggedUser.emailUser}`);
    console.log(`loggedUserCurrentIdProgram from studentLandingPage: ${loggedUser.currentIdProgram}`);
  }
  console.log(`programs from studentLandingPage: ${programs}`);

  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));
  const navigate = useNavigate();

  return (
    <div className="landingPage">

      <h1>Student Landing Page</h1>

        <div>
          <h3>My Information</h3>
          <table>
            <tr>
              {myPrograms.map((program) => <ul key={program.id}><li>Program Name: {program.nameProgram} </li></ul>)}
              {myTerms.map((term) => <ul key={term.id}><li>Term #: {term.nameTerm}</li><li>Start Date: {term.startTerm}</li><li>End Date: {term.endTerm}</li></ul>)}
            </tr>
          </table>
        </div>

        <div>
          <h3>Resources</h3>
          <table>
            <tr>
              <td><button onClick={() => navigate('/viewMyCourses')}>View My Courses</button></td>
              <td></td>
            </tr>
          </table>
        </div>

        <div>
          <h3>Registration</h3>
          <table>
            <tr>
              <td><button onClick={() => navigate('/registerStudentForTerm')}>Register for Term</button></td>
              <td><button onClick={() => navigate('/registerStudentForCourses')}>Register for Courses</button></td>
            </tr>
          </table>
        </div>

    </div>
  );
}
 
export default StudentLandingPage;