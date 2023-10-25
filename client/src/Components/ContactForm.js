import React, { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [programName, setProgramName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ studentName, studentID, programName, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        required
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student ID"
        required
        onChange={(e) => setStudentID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Program Name"
        required
        onChange={(e) => setProgramName(e.target.value)}
      />
      <textarea
        placeholder="What do you need help with ?"
        required
        onChange={(e) => setMessage(e.target.value)}
        rows={10}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;