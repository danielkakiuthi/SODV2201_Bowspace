import { useState } from 'react';

const AddUser = () => {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {email, password, name, isAdmin};

    fetch('http://localhost:8000/listUser', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New User Added!');
      setIsPending(false);
    })
  }


  return (
    <div className="add-user">
      <h2>Add User Page (SignUp)</h2>

      <form onSubmit={handleSubmit}>
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
        <select
          required
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value)}
        >
          <option value="false">false</option>
        </select>

        { !isPending && <button>Add User</button> }
        { isPending && <button disabled>Loading User...</button> }
      </form>
    </div>
  );
}
 
export default AddUser;


// {
//   "idUser":0,
//   "emailUser": "d.kakiuthi331@mybvc.ca",
//   "passwordUser": "123",
//   "nameUser": "Daniel Kakiuthi",
//   "isAdmin": true
//}

