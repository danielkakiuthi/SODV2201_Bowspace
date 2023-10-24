import { Link, useNavigate } from "react-router-dom";

const ProgramsList = ({ programs }) => {

  const navigate = useNavigate();

  return (
    <div className="programs-list">
      <h2>Programs List:</h2>
      {programs.map((program) => (
        <div className="program-preview" key={program.id}>
          <Link to={`/programs/${program.id}`}>
            <p>id Program: {program.id} | nameProgram: {program.nameProgram}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addProgram')}>Add Program</button>
    </div>
  );
}
 
export default ProgramsList;