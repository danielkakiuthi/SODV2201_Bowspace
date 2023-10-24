import { useState } from 'react';

const AddProgram = () => {

  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [length, setLength] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      nameProgram: name,
      lengthProgram: length
    };
    fetch('http://localhost:8000/listPrograms', {
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
      <h2>Add Program Page</h2>

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
        { !isPending && <button>Add Program</button> }
        { isPending && <button disabled>Loading Program...</button> }
      </form>

    </div>
  );
}
 
export default AddProgram;