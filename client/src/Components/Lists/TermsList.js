import { Link, useNavigate } from "react-router-dom";

const TermsList = ({ terms }) => {
  
  const navigate = useNavigate();

  return (
    <div className="terms-list">
      <h2>Terms List:</h2>
      {terms.map((term) => (
        <div className="term-preview" key={term.id}>
          <Link to={`/terms/${term.id}`}>
            <p>id Term: {term.id} | nameTerm: {term.nameTerm} | startTerm: {term.startTerm} | endTerm: {term.endTerm}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addTerm')}>Add Term</button>
    </div>
  );
}
 
export default TermsList;