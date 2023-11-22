import ProgramsList from '../Admin/Lists/ListPrograms';

const ProgramsInformation = ({ programs }) => {

  return (
    <div className="programs-information">
      <h2>Programs Information Page</h2>

      { programs && <ProgramsList programs={programs} /> }

    </div>
  );
}
 
export default ProgramsInformation;