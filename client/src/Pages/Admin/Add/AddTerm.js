import { useState } from 'react';

const AddTerm = () => {

  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      nameTerm: name,
      startTerm: start,
      endTerm: end
    };
    fetch('http://localhost:8000/listTerms', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('New Term Added!');
      setIsPending(false);
    })
  }


  return (
    <div className="add-term">
      <h1>Add Term Page</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Start Date:</label>
        <input
          type="text"
          required
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="text"
          required
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        { !isPending && <button>Add Term</button> }
        { isPending && <button disabled>Loading Term...</button> }
      </form>

    </div>
  );
}
 
export default AddTerm;