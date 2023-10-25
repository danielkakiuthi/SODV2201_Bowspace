import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const EditCourse = ({ course, loggedUser }) => {

  const [isPending, setIsPending] = useState(false);
  const [idTerm, setIdTerm] = useState(course.idTerm);
  const [idProgram, setIdProgram] = useState(course.idProgram);
  const [code, setCode] = useState(course.codeCourse);
  const [name, setName] = useState(course.nameCourse);
  const [credit, setCredit] = useState(course.creditCourse);
  const [fee, setFee] = useState(course.feeCourse);
  const [description, setDescription] = useState(course.descriptionCourse);
  const navigate = useNavigate();
  
  
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsPending(true);

    const urlUpdate = `http://localhost:8000/listCourses/${ course.id }`;
    const data = {
      idTerm: idTerm,
      idProgram: idProgram,
      codeCourse: code,
      nameCourse: name,
      creditCourse: credit,
      feeCourse: fee,
      descriptionCourse: description
    };
    fetch(urlUpdate, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Course Updated!');
      setIsPending(false);
      navigate("/");
    })
  }


  const handleRegister = () => {
    setIsPending(true);
    const myCurrentIdCourses = loggedUser.currentIdCourses;
    const newCurrentIdCourses = [...myCurrentIdCourses, course.id]
    const urlRegister = `http://localhost:8000/listUsers/${ loggedUser.id }`;
    const data = {
      emailUser: loggedUser.emailUser,
      passwordUser: loggedUser.passwordUser,
      isAdmin: loggedUser.isAdmin,
      firstNameUser: loggedUser.firstNameUser,
      lastNameUser: loggedUser.lastNameUser,
      phoneUser: loggedUser.phoneUser,
      dateBirthUser: loggedUser.dateBirthUser,
      currentIdProgram: loggedUser.currentIdProgram,
      currentIdTerm: loggedUser.currentIdTerm,
      currentIdCourses: newCurrentIdCourses,
      finishedIdCourses: loggedUser.finishedIdCourses
    }
    fetch(urlRegister, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('User Courses Updated!');
      setIsPending(false);
      navigate("/");
    })
  }


  const handleDelete = () => {
    const urlDelete = `http://localhost:8000/listCourses/${ course.id }`;
    fetch(urlDelete, {
      method: 'DELETE'
    }).then(() => {
      navigate("/");
    })
  }


  return (
    <div className="edit-course">
      <h1>Edit Course Page</h1>
      <form onSubmit={handleUpdate}>
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
        <textarea
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="10"
        />
        { !isPending && <button>Update Course</button> }
        { isPending && <button disabled>Loading Course...</button> }
        <button onClick={handleRegister} className='register-button'>Register</button>
        <button onClick={handleDelete} className='delete-button'>Delete Course</button>
      </form>
    </div>
  );
}
 
export default EditCourse;