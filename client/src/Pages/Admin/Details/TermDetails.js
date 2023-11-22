import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import EditTerm from "../../../Components/Edit/EditTerm";

const TermDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/listTerms/${ id }`
  const { data: term, error, isPending } = useFetch(url);

  return (
    <div className="term-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { term && <EditTerm term={term} />}
    </div>
  );
}
 
export default TermDetails;