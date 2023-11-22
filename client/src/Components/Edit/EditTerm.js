import { useState } from 'react';

const EditTerm = ({ term }) => {

  const [isPending, setIsPending] = useState(false);
  const [name, setName] = useState(term.nameTerm);
  const [start, setStart] = useState(term.startTerm);
  const [end, setEnd] = useState(term.endTerm);
  const url = `http://localhost:8000/listTerms/${ term.id }`;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const data = {
      nameTerm: name,
      startTerm: start,
      endTerm: end
    };
    fetch(url, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Term Updated!');
      alert('Term Updated!');
      setIsPending(false);
    })
  }


  return (
    <div className="edit-term">
      <h2>Edit Term Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Term Id: {term.id}</h3>
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
        { !isPending && <button>Update Term</button> }
        { isPending && <button disabled>Loading Term...</button> }
      </form>
    </div>
  );
}
 
export default EditTerm;