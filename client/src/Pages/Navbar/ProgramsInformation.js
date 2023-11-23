import ListPrograms from '../Admin/Lists/ListPrograms';

const ProgramsInformation = ({ programs, loggedUser }) => {

  return (
    <div className="programs-information">
      <h2>Programs Information Page</h2>

      { programs && <ListPrograms programs={programs} loggedUser={loggedUser} /> }

    </div>
  );
}
 
export default ProgramsInformation;