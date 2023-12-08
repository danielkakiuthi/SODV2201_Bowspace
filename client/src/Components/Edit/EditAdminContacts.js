import { useState } from 'react';

const EditAdminContacts = ({ adminContact }) => {

  const [isPending, setIsPending] = useState(false);
  const [studentName, setStudentName] = useState(adminContact.studentName);
  const [studentId, setStudentId] = useState(adminContact.studentId);
  const [programName, setProgramName] = useState(adminContact.programName);
  const [description, setDescription] = useState(adminContact.description);
  const url = `http://localhost:8000/adminContacts/${ adminContact.id }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      studentName: studentName,
      studentId: studentId,
      programName: programName,
      description: description
    };
    fetch(url, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('AdminContact Updated!');
      alert('AdminContact Updated!');
      setIsPending(false);
    })
  }

  return (
    <div className="addOrEditPage">
      <h2>Edit Admin Contact Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Admin Contact Id: {adminContact.id}</h3>
        <label>Student Name:</label>
        <input
          type="text"
          required
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <label>Student Id:</label>
        <input
          type="text"
          required
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label>Program Name:</label>
        <input
          type="text"
          required
          value={programName}
          onChange={(e) => setProgramName(e.target.value)}
          rows="10"
        />
        <label>Description:</label>
        <textarea
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="10"
        />
        { !isPending && <button>Update Admin Contact</button> }
        { isPending && <button disabled>Loading Admin Contact...</button> }
      </form>
    </div>
  );
}
 
export default EditAdminContacts;