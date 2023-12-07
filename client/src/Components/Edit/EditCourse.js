import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const EditCourse = ({ course, users, loggedUser, setLoggedUser }) => {

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
      alert('Course Updated!');
      setIsPending(false);
      navigate("/");
    })
  }


  const handleRegister = () => {
    setIsPending(true);
    const myFinishedIdCourses = loggedUser.finishedIdCourses;
    const myCurrentIdCourses = loggedUser.currentIdCourses;

    console.log(`myFinishedIdCourses: ${myFinishedIdCourses}`);
    console.log(`myCurrentIdCourses: ${myCurrentIdCourses}`);
    console.log(`course.id: ${course.id}`);

    //check if user alreadyfinished this course
    if(myFinishedIdCourses.includes(course.id)) {
      console.log('You have already Finished this Course!');
      alert('You have already Finished this Course!');
      setIsPending(false);
      navigate("/viewMyCourses");
      return;
    }

    //check if user is already registered to this course
    if(myCurrentIdCourses.includes(course.id)) {
      console.log('You are already currently registered for this Course!');
      alert('You are already currently registered for this Course!');
      setIsPending(false);
      navigate("/viewMyCourses");
      return;
    }

    const newCurrentIdCourses = [...myCurrentIdCourses, course.id]
    console.log(`newCurrentIdCourses: ${newCurrentIdCourses}`);

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
      const updatedLoggedUser = data;
      setLoggedUser(updatedLoggedUser);
      console.log(`updatedLoggedUser: ${JSON.stringify(updatedLoggedUser, null, 2)}`);
      window.sessionStorage.setItem("sessionLoggedUser", JSON.stringify(updatedLoggedUser));
      console.log('Registered for new Course!');
      alert('Registered for new Course!');
      setIsPending(false);
      navigate("/viewMyCourses");
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
    <div className="addOrEditPage">
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
        { !isPending && loggedUser.isAdmin && <button>Update Course</button> }
        { isPending && <button disabled>Loading Course...</button> }
      </form>
        { !loggedUser.isAdmin && <button onClick={handleRegister} className='register-button'>Register For Course</button> }
        { loggedUser.isAdmin && <button onClick={handleDelete} className='delete-button'>Delete Course</button> }
    </div>
  );
}
 
export default EditCourse;