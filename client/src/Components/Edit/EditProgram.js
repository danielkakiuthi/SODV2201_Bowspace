import { useState } from 'react';

const EditProgram = ({ program }) => {

  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState(program.nameProgram);
  const [length, setLength] = useState(program.lengthProgram);
  const [about, setAbout] = useState(program.aboutProgram);
  const [description, setDescription] = useState(program.descriptionProgram);
  const url = `http://localhost:8000/listPrograms/${ program.id }`;

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
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Program Updated!');
      setIsPending(false);
    })
  }

  return (
    <div className="edit-program">
      <h2>Edit Program Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Program Id: {program.id}</h3>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Length:</label>
        <input
          type="text"
          required
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>About:</label>
        <textarea
          type="text"
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
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
        { !isPending && <button>Update Program</button> }
        { isPending && <button disabled>Loading Program...</button> }
      </form>
    </div>
  );
}
 
export default EditProgram;