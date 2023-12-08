import { Link, useNavigate } from "react-router-dom";

const ListAdminContacts = ({ adminContacts }) => {

  const navigate = useNavigate();

  return (
    <div className="listPreview">
      <h1>Admin Contacts List:</h1>
      {adminContacts.map((adminContact) => (
        <div key={adminContact.id}>
          <Link to={`/adminContacts/${adminContact.id}`}>
            <h2>[id adminContact: {adminContact.id}] Student: {adminContact.studentName} (Student Id: {adminContact.studentId})</h2>
            <h3>Program Name: {adminContact.programName}</h3>
            <p>{adminContact.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ListAdminContacts;