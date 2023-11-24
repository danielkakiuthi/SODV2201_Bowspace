import { Link, useNavigate } from "react-router-dom";

const ListUsers = ({ users }) => {

  const navigate = useNavigate();

  return (
    <div className="listPreview">
      <h1>Users List:</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h2>[id User: {user.id}] {user.nameUser}</h2>
            <p>emailUser: {user.emailUser}</p>
          </Link>
        </div>
      ))}
      {/* <button onClick={() => navigate('/addUser')}>Add User</button> */}
    </div>
  );
}
 
export default ListUsers;