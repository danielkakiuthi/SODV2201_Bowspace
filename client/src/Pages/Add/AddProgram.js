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
      setIsPending(false);
    })
  }

  
  return (
    <div className="add-program">
      <h1>Add Program Page</h1>

      <form onSubmit={handleSubmit}>
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
        { !isPending && <button>Add Program</button> }
        { isPending && <button disabled>Loading Program...</button> }
      </form>

    </div>
  );
}
 
export default AddProgram;