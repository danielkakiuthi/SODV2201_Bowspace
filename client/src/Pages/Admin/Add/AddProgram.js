import { useState } from 'react';

const AddProgram = () => {

  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const url = `http://localhost:8000/listPrograms`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      nameProgram: name,
      lengthProgram: length,
      aboutProgram: about,
      descriptionProgram: description
    };
    fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New Program Added!');
      alert('New Program Added!');
      setIsPending(false);
    })
  }

  
  return (
    <div className="addOrEditPage">
      <h1>Add Program Page</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder='Software Development Diploma' />
        
        <label>Length:</label>
        <select type="text" required value={length} onChange={(e) => setLength(e.target.value)}>
          <option value={"1 year"}>1 Year</option>
          <option value={"2 years"}>2 Years</option>
        </select>

        <label>About:</label>
        <textarea type="text" required value={about} onChange={(e) => setAbout(e.target.value)} rows="10" placeholder='Gain the skills you need to create the latest computer, mobile, and gaming applications. Prepare to transform your ideas into reality all while developing your problem-solving skills.'/>
        
        <label>Description:</label>
        <textarea type="text" required value={description} onChange={(e) => setDescription(e.target.value)} rows="10" placeholder="Gain practical experience in the cycles of software development through hands-on learning and real projects. You'll gain an understanding of industry standards of planning, developing, and quality assurance testing.\nYou'll learn the fundamentals of computer logic, giving you a solid foundation in applying programming skills in a variety of situations. You'll also becoming familiar with emerging topics like user experience (UX) and the internet of things." />

        { !isPending && <button>Add Program</button> }
        { isPending && <button disabled>Loading Program...</button> }
      </form>

    </div>
  );
}
 
export default AddProgram;