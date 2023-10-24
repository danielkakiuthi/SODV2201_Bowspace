import useFetch from '../../Hooks/useFetch';
import ProgramsList from '../../Components/Lists/ProgramsList';

const ProgramsInformation = () => {

  const urlListPrograms = 'http://localhost:8000/listPrograms';

  const {data: programs, isPending: isPendingPrograms, error: errorPrograms} = useFetch(urlListPrograms);

  return (
    <div className="programs-information">
      <h2>Programs Information Page</h2>

      { errorPrograms && <div>{ errorPrograms }</div> }
      { isPendingPrograms && <div>Loading...</div> }
      { programs && <ProgramsList programs={programs} /> }

    </div>
  );
}
 
export default ProgramsInformation;