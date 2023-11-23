import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


const loginUser = async (credentials) => {
  
  const url = `http://localhost:8080/login`;
  
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}


const Login = ({ setToken, setLoggedUser, users }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let token = null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    users.map(async (user) => {
      if(user.emailUser===email && user.passwordUser===password) {
        token = await loginUser({
          email,
          password
        })
        setToken(token);
        setLoggedUser(user);
        window.sessionStorage.setItem("sessionLoggedUser", JSON.stringify(user));
      }
    })
    navigate("/");
  }


  return (
    <div className="loginPage">
      <h2>Please Login</h2>

      <form onSubmit={handleSubmit}>
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
        <a href="/signUp">SignUp</a>
      </form>

    </div>
  );
}
 
export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}