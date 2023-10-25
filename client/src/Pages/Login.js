import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../Hooks/useFetch';


const url = `http://localhost:8080/login`

const loginUser = async (credentials) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}


const Login = ({ setToken,setLoggedUser }) => {

  const urlListUsers = 'http://localhost:8000/listUsers';
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { data: users } = useFetch(urlListUsers);
  let token = null;

  const handleSumbit = async (e) => {
    e.preventDefault();

    users.map(async (user) => {
      if(user.emailUser===email && user.passwordUser===password) {
        token = await loginUser({
          email,
          password
        })
        setToken(token);
        setLoggedUser(user);
      }
    })
  }



  return (
    <div className="login">
      <h2>Please Login</h2>

      <form onSubmit={handleSumbit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <a href="/signUp">SignUp</a>

    </div>
  );
}
 
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}