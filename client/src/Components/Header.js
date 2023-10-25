import logo from '../BVC_ShortLogo.png'
import Navbar from "./Navbar";
import MenuUser from "./MenuUser";


const Header = ({ loggedUser }) => {
  return (
    <div className="header">
      <MenuUser loggedUser={loggedUser} />
      <img src={logo} alt="Logo" className='header-image' />;
      <h1 className='bowspace'>Bowspace</h1>
      <Navbar loggedUser={loggedUser} />

    </div>
  );
}
 
export default Header;