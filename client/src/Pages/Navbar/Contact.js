import { useState } from "react";

const Contact = ({ adminContacts }) => {
  
  const [isPending, setIsPending] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [programName, setProgramName] = useState("");
  const [description, setDescription] = useState("");

  const url = `http://localhost:8000/listAdminContacts`;

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
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New Admin Contact request Added!');
      alert('New Admin Contact request Added!');
      setIsPending(false);
    })
  }


  return (
    <div className="contactPage">
      <h1>Help From Admin</h1>
      
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        required
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student Id"
        required
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Program Name"
        required
        onChange={(e) => setProgramName(e.target.value)}
      />
      <textarea
        placeholder="What do you need help with ?"
        required
        onChange={(e) => setDescription(e.target.value)}
        rows={10}
      />
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default Contact;