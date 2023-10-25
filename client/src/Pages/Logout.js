import { useNavigate } from "react-router-dom"
import { useEffect } from "react";


const Logout = ({ setToken, setLoggedUser }) => {
  
  const navigate = useNavigate()

  useEffect(() => {

    navigate("/login");

  })
}
 
export default Logout;