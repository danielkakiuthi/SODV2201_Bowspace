import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerComponent">
      <div>
        <Link to="/"> Home |</Link>
        <Link to="/about"> About |</Link>
        <Link to="/contact"> Contact |</Link>
        <Link to="/programsInformation"> Programs Information</Link>
      </div>
      <p>Copyright @ 2023 Bow Valley College. All rights reserved.</p>
    </div>
  );
}
 
export default Footer;