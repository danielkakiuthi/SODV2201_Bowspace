import { Link, useNavigate } from "react-router-dom";

const TermsList = ({ terms }) => {
  
  const navigate = useNavigate();

  return (
    <div className="terms-list">
      <h1>Terms List:</h1>
      {terms.map((term) => (
        <div className="preview" key={term.id}>
          <Link to={`/terms/${term.id}`}>
            <h2>[id Term: {term.id}] {term.nameTerm}</h2>
            <p>(From {term.startTerm} Until {term.endTerm})</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addTerm')}>Add Term</button>
    </div>
  );
}
 
export default TermsList;