import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import EditAdminContacts from "../../../Components/Edit/EditAdminContacts";

const DetailsAdminContacts = ({ adminContacts }) => {
  const { id } = useParams();
  const urlListAdminContacts = `http://localhost:8000/listAdminContacts/${ id }`
  const { data: adminContact, error, isPending } = useFetch(urlListAdminContacts);
  
  return (
    <div className="admin-contacts-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { adminContact && <EditAdminContacts adminContact={adminContact} />}
    </div>
  );
}
 
export default DetailsAdminContacts;