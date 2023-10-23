import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProgramDetails = () => {
  const { idProgram } = useParams();
  const url = `http://localhost:8000/listPrograms/${ idProgram }`
  const { data: program, error, isPending } = useFetch(url);

  return (
    <div className="program-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { program && (
        <article>
          <p>idProgram: { program.idProgram } | nameProgram: { program.nameProgram } | lengthProgram: { program.lengthProgram }</p>
        </article>
      )}
    </div>
  );
}
 
export default ProgramDetails;