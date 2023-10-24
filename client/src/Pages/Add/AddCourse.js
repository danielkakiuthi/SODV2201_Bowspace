import { useState } from 'react';

const AddCourse = () => {

  const [isPending, setIsPending] = useState(false);
  const [idTerm, setIdTerm] = useState("");
  const [idProgram, setIdProgram] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      idTerm: idTerm,
      idProgram: idProgram,
      codeCourse: code,
      nameCourse: name,
      creditCourse: credit,
      feeCourse: fee,
      descriptionCourse: description
    };
    fetch('http://localhost:8000/listCourses', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New Course Added!');
      setIsPending(false);
    })
  }


  return (
    <div className="add-course">
      <h2>Add Course Page</h2>

      <form onSubmit={handleSubmit}>
        <label>ID Term:</label>
        <input
          type="text"
          required
          value={idTerm}
          onChange={(e) => setIdTerm(e.target.value)}
        />
        <label>ID Program:</label>
        <input
          type="text"
          required
          value={idProgram}
          onChange={(e) => setIdProgram(e.target.value)}
        />
        <label>Code:</label>
        <input
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Credits:</label>
        <input
          type="text"
          required
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
        />
        <label>Fee:</label>
        <input
          type="text"
          required
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        { !isPending && <button>Add Course</button> }
        { isPending && <button disabled>Loading Course...</button> }
      </form>

    </div>
  );
}
 
export default AddCourse;