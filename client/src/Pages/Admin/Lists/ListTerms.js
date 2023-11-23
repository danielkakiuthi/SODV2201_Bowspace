import { Link, useNavigate } from "react-router-dom";

const ListTerms = ({ terms }) => {
  
  const navigate = useNavigate();

  return (
    <div className="listPreview">
      <h1>Terms List:</h1>
      {terms.map((term) => (
        <div key={term.id}>
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
 
export default ListTerms;