import { useNavigate } from "react-router-dom";


const AdminLandingPage = ({users, programs, terms, courses}) => {

  const navigate = useNavigate();

  return (
    <div className="adminLandingPage">
      <h1>Admin Landing Page</h1>

        <table>
          <tr>
            <td><button onClick={() => navigate('/addUser')}>Add User</button></td>
            <td><button onClick={() => navigate('/addProgram')}>Add Program</button></td>
            <td><button onClick={() => navigate('/addTerm')}>Add Term</button></td>
            <td><button onClick={() => navigate('/addCourse')}>Add Course</button></td>
          </tr>
          <tr>
            <td><button onClick={() => navigate('/listUsers')}>List Users</button></td>
            <td><button onClick={() => navigate('/listPrograms')}>List Programs</button></td>
            <td><button onClick={() => navigate('/listTerms')}>List Terms</button></td>
            <td><button onClick={() => navigate('/listCourses')}>List Courses</button></td>
          </tr>
        </table>

    </div>
    
  );
}
 
export default AdminLandingPage;