import ContactForm from "../../Components/ContactForm";

const Contact = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="contact">Help From Admin</h1>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
};

export default Contact;