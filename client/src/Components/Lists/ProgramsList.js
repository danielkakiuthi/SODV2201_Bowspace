import { Link, useNavigate } from "react-router-dom";

const ProgramsList = ({ programs }) => {

  const navigate = useNavigate();

  return (
    <div className="programs-list">
      <h1>Programs List:</h1>
      {programs.map((program) => (
        <div className="preview" key={program.id}>
          <Link to={`/programs/${program.id}`}>
            <h2>[Program: {program.id}] {program.nameProgram}</h2>
            <p>{program.aboutProgram}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addProgram')}>Add Program</button>
    </div>
  );
}
 
export default ProgramsList;