import ContactForm from "../../Components/ContactForm";

const Contact = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contactPage">
      <h1>Help From Admin</h1>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
};

export default Contact;