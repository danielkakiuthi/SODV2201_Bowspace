import logo from '../BVC_ShortLogo.png'
import Navbar from "./Navbar";
import MenuUser from "./MenuUser";


const Header = ({ loggedUser }) => {
  return (
    <div className="headerComponent">
      <MenuUser loggedUser={loggedUser} />
      <img src={logo} alt="Logo" />;
      <h1>Bowspace</h1>
      <Navbar loggedUser={loggedUser} />

    </div>
  );
}
 
export default Header;