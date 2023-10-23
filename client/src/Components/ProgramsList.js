const ProgramsList = ({ programs }) => {
  console.log(programs)
  return (
    <div className="programs-list">
      <h3>Programs List:</h3>
      {programs.map((program) => (
        <div className="program-preview" key={program.idProgram}>
          <p>idProgram: {program.idProgram} | nameProgram: {program.nameProgram} | lengthProgram: {program.length}</p>
        </div>
      ))}
    </div>
  );
}
 
export default UsersList;