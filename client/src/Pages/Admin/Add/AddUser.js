import { useState } from 'react';

const AddUser = () => {

  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [currentIdProgram, setCurrentIdProgram] = useState();
  const [currentIdTerm, setCurrentIdTerm] = useState();
  const [currentIdCourses, setCurrentIdCourses] = useState([]);
  const [finishedIdCourses, setFinishedIdCourses] = useState([]);

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
    fetch('http://localhost:8000/listUsers', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New User Added!');
      setIsPending(false);
    })
  }


  return (
    <div className="add-user">
      <h1>Add User Page (SignUp)</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

        {/* <label>Is Admin:</label> */}
        <input type="hidden" required value={isAdmin} onChange={(e) => setIsAdmin(e.target.value)} />

        <label>First Name:</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name:</label>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Phone:</label>
        <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Date Birth:</label>
        <input type="text" required value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} />

        {/* <label>Current Id Program:</label> */}
        <input type="hidden" required value={currentIdProgram} onChange={(e) => setCurrentIdProgram(e.target.value)} readOnly />

        {/* <label>Current Id Term:</label> */}
        <input type="hidden" required value={currentIdTerm} onChange={(e) => setCurrentIdTerm(e.target.value)} readOnly />

        {/* <label>Current Id Courses:</label> */}
        <input type="hidden" required value={currentIdCourses} onChange={(e) => setCurrentIdCourses(e.target.value)} readOnly />
        
        {/* <label>Finished Id Courses:</label> */}
        <input type="hidden" required value={finishedIdCourses} onChange={(e) => setFinishedIdCourses(e.target.value)} readOnly />
        
        { !isPending && <button>Add User</button> }
        { isPending && <button disabled>Loading User...</button> }
      </form>
      
    </div>
  );
}
 
export default AddUser;