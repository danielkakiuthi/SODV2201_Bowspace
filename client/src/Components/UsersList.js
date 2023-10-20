const UsersList = ({ users }) => {
  console.log(users)
  return (
    <div className="users-list">
      <h3>Users List:</h3>
      {users.map((user) => (
        <div className="user-preview" key={user.idUser}>
          <p>idUser: {user.idUser} | emailUser: {user.emailUser} | passwordUser: {user.passwordUser} | nameUser: {user.nameUser} | isAdmin: {user.isAdmin.toString()}</p>
        </div>
      ))}
    </div>
  );
}
 
export default UsersList;