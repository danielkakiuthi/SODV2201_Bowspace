import { useState } from 'react';

const EditUser = ({ user }) => {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState(user.emailUser);
  const [password, setPassword] = useState(user.passwordUser);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [firstName, setFirstName] = useState(user.firstNameUser);
  const [lastName, setLastName] = useState(user.lastNameUser);
  const [phone, setPhone] = useState(user.phoneUser);
  const [dateBirth, setDateBirth] = useState(user.dateBirthUser);
  const [currentIdProgram, setCurrentIdProgram] = useState(user.currentIdProgram);
  const [currentIdTerm, setCurrentIdTerm] = useState(user.currentIdTerm);
  const [currentIdCourses, setCurrentIdCourses] = useState(user.currentIdCourses);
  const [finishedIdCourses, setFinishedIdCourses] = useState(user.finishedIdCourses);
  const url = `http://localhost:8000/listUsers/${ user.id }`;


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      emailUser: email,
      passwordUser: password,
      isAdmin: isAdmin,
      firstNameUser: firstName,
      lastNameUser: lastName,
      phoneUser: phone,
      dateBirthUser: dateBirth,
      currentIdProgram: currentIdProgram,
      currentIdTerm: currentIdTerm,
      currentIdCourses: currentIdCourses,
      finishedIdCourses: finishedIdCourses
    };
    fetch(url, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('User Updated!');
      alert('User Updated!');
      setIsPending(false);
    })
  }

  
  return (
    <div className="addOrEditPage">
      <h2>Edit User Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>User Id: {user.id}</h3>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Is Admin:</label>
        <input
          type="text"
          required
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.value)}
        />
        <label>First Name:</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Date Birth:</label>
        <input
          type="text"
          required
          value={dateBirth}
          onChange={(e) => setDateBirth(e.target.value)}
        />
        <label>Current Id Program:</label>
        <input
          type="text"
          required
          value={currentIdProgram}
          onChange={(e) => setCurrentIdProgram(e.target.value)}
          readOnly
        />
        <label>Current Id Term:</label>
        <input
          type="text"
          required
          value={currentIdTerm}
          onChange={(e) => setCurrentIdTerm(e.target.value)}
          readOnly
        />
        <label>Current Id Courses:</label>
        <input
          type="text"
          required
          value={currentIdCourses}
          onChange={(e) => setCurrentIdCourses(e.target.value)}
          readOnly
        />
        <label>Finished Id Courses:</label>
        <input
          type="text"
          required
          value={finishedIdCourses}
          onChange={(e) => setFinishedIdCourses(e.target.value)}
          readOnly
        />
        { !isPending && <button>Update User</button> }
        { isPending && <button disabled>Loading User...</button> }
      </form>
    </div>
  );
}
 
export default EditUser;