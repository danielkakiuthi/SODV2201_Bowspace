import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="errorPage">
      <h2>Error: Page Not Found</h2>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default Error;