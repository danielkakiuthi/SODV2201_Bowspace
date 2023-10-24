import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import EditUser from "../../Components/Edit/EditUser";

const UserDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/listUsers/${ id }`
  const { data: user, error, isPending } = useFetch(url);

  return (
    <div className="user-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { user && <EditUser user={user} />}
    </div>
  );
}
 
export default UserDetails;