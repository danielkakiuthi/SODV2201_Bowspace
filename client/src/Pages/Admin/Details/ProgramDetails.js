import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import EditProgram from "../../../Components/Edit/EditProgram";

const ProgramDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/listPrograms/${ id }`
  const { data: program, error, isPending } = useFetch(url);

  return (
    <div className="program-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { program && <EditProgram program={program} />}
    </div>
  );
}
 
export default ProgramDetails;