import { useState } from 'react';

const useToken = () => {
  
  const getToken = () => {
    //const tokenString = localStorage.getItem('token');  //credentials persist across different windows
    const tokenString = sessionStorage.getItem('token');  //credentials persist only in single session
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

  const [token, setToken] = useState(getToken());
 
  const saveToken = (userToken) => {
    //localStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  }

  return {
    setToken: saveToken,
    token
  }
}
 
export default useToken;