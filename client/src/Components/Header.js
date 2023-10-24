import logo from '../BVC_ShortLogo.png'
import Navbar from "./Navbar";
import MenuUser from "./MenuUser";


const Header = () => {
  return (
    <div className="header">
      <MenuUser />
      <img src={logo} alt="Logo" className='header-image' />;
      <h1>Bowspace</h1>
      <Navbar />

    </div>
  );
}
 
export default Header;