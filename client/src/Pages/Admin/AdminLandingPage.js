import { useNavigate } from "react-router-dom";


const AdminLandingPage = ({users, programs, terms, courses}) => {

  const navigate = useNavigate();

  return (
    <div className="landingPage">

      <h1>Admin Landing Page</h1>

        <div>
          <h3>Manage Users</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/addUser')}>Add User</button></td>
                <td><button onClick={() => navigate('/listUsers')}>List Users</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Manage Programs</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/addProgram')}>Add Program</button></td>
                <td><button onClick={() => navigate('/listPrograms')}>List Programs</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Manage Terms</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/addTerm')}>Add Term</button></td>
                <td><button onClick={() => navigate('/listTerms')}>List Terms</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Manage Courses</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/addCourse')}>Add Course</button></td>
                <td><button onClick={() => navigate('/listCourses')}>List Courses</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Manage Contacts To Admin</h3>
          <table>
            <tbody>
              <tr>
                <td><button onClick={() => navigate('/listAdminContacts')}>List Admin Contacts</button></td>
              </tr>
            </tbody>
          </table>
        </div>

    </div>
    
  );
}
 
export default AdminLandingPage;