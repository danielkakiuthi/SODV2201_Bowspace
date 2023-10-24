import ContactForm from "../Components/ContactForm";

const HelpForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="h1ContactForm">Help From Admin</h1>
      <ContactForm onSubmit={onSubmit} />
    </div>
  );
};

export default HelpForm;
