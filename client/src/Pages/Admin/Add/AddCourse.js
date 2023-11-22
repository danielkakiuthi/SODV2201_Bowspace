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
  const url = `http://localhost:8000/listCourses`;

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
    fetch(url, {
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
      <h1>Add Course Page</h1>

      <form onSubmit={handleSubmit}>
        <label>ID Term:</label>
        <input type="text" required value={idTerm} onChange={(e) => setIdTerm(e.target.value)} placeholder='1' />

        <label>ID Program:</label>
        <input type="text" required value={idProgram} onChange={(e) => setIdProgram(e.target.value)} placeholder='1' />

        <label>Code:</label>
        <input type="text" required value={code} onChange={(e) => setCode(e.target.value)} placeholder='SODV2201' />

        <label>Name:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder='Web Programming' />

        <label>Credits:</label>
        <input type="text" required value={credit} onChange={(e) => setCredit(e.target.value)} placeholder='3' />

        <label>Fee:</label>
        <input type="text" required value={fee} onChange={(e) => setFee(e.target.value)} placeholder='1900.00' />

        <label>Description:</label>
        <textarea type="text" required value={description} onChange={(e) => setDescription(e.target.value)} rows="10" placeholder='This course gives learners the opportunity to enhance and enrich their skills in web programming. Learners develop web applications using three-tier architecture, session management, object-oriented techniques and advanced database interactions. In addition, the course explores concepts such as advanced cascading style sheet (CSS). Learners develop rich interactive web applications with authentication and security.' />
        
        { !isPending && <button>Add Course</button> }
        { isPending && <button disabled>Loading Course...</button> }
      </form>

    </div>
  );
}
 
export default AddCourse;