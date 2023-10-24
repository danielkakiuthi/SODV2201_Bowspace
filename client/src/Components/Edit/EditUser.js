import { useState } from 'react';

const EditUser = ({ user }) => {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState(user.emailUser);
  const [password, setPassword] = useState(user.passwordUser);
  const [name, setName] = useState(user.nameUser);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const url = `http://localhost:8000/listUsers/${ user.id }`;


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      emailUser: email,
      passwordUser: password,
      nameUser: name,
      isAdmin: isAdmin
    };
    fetch(url, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('User Updated!');
      setIsPending(false);
    })
  }

  
  return (
    <div className="edit-user">
      <h2>Edit User Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>User Id: {user.id}</h3>
        <label>Email:</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Is Admin:</label>
        <input
          type="text"
          required
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value)}
        />
        { !isPending && <button>Update User</button> }
        { isPending && <button disabled>Loading User...</button> }
      </form>
    </div>
  );
}
 
export default EditUser;