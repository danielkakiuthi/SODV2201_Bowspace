import { Link, useNavigate } from "react-router-dom";

const UsersList = ({ users }) => {

  const navigate = useNavigate();

  return (
    <div className="users-list">
      <h2>Users List:</h2>
      {users.map((user) => (
        <div className="user-preview" key={user.id}>
          <Link to={`/users/${user.id}`}>
            <p>id User: {user.id} | emailUser: {user.emailUser} | nameUser: {user.nameUser}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addUser')}>Add User</button>
    </div>
  );
}
 
export default UsersList;