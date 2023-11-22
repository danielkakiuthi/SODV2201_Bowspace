import ListTerms from '../Admin/Lists/ListTerms';

const RegisterStudentForTerm = ({ loggedUser, terms }) => {

  const myCurrentTerm = terms.filter((term) => (term.id === loggedUser.currentIdTerm));

  return (
    <div className="register-student-for-term">

      <h2>My Current Term: {myCurrentTerm[0].nameTerm}</h2>
      <h2>Register Student For Courses Page</h2>

      { terms && <ListTerms terms={terms} /> }

    </div>
  );
}
 
export default RegisterStudentForTerm;