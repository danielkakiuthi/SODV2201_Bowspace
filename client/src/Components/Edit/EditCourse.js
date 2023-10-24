import { useState } from 'react';

const EditCourse = ({ course }) => {

  const [isPending, setIsPending] = useState(false);
  const [idTerm, setIdTerm] = useState(course.idTerm);
  const [idProgram, setIdProgram] = useState(course.idProgram);
  const [code, setCode] = useState(course.codeCourse);
  const [name, setName] = useState(course.nameCourse);
  const [credit, setCredit] = useState(course.creditCourse);
  const [fee, setFee] = useState(course.feeCourse);
  const [description, setDescription] = useState(course.descriptionCourse);
  const url = `http://localhost:8000/listCourses/${ course.id }`;


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
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Course Updated!');
      setIsPending(false);
    })
  }


  return (
    <div className="edit-course">
      <h2>Edit Course Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Course Id: {course.id}</h3>
        <label>id Term:</label>
        <input
          type="text"
          required
          value={idTerm}
          onChange={(e) => setIdTerm(e.target.value)}
        />
        <label>id Program:</label>
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
        { !isPending && <button>Update Course</button> }
        { isPending && <button disabled>Loading Course...</button> }
      </form>
    </div>
  );
}
 
export default EditCourse;