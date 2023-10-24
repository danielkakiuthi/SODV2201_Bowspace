import { useState } from 'react';

const AddUser = () => {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      emailUser: email,
      passwordUser: password,
      nameUser: name,
      isAdmin: isAdmin
    };
    fetch('http://localhost:8000/listUsers', {
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
      <h1>Add User Page (SignUp)</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
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
        <input
          type="hidden"
          required
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value)}
        />
        { !isPending && <button>Add User</button> }
        { isPending && <button disabled>Loading User...</button> }
      </form>
      <a href="/login">Login</a>
      
    </div>
  );
}
 
export default AddUser;