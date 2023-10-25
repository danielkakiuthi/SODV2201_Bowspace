import useFetch from '../Hooks/useFetch';
import TermsList from '../Components/Lists/TermsList';

const RegisterStudentForTerm = ({ loggedUser }) => {

  const urlListTerms = 'http://localhost:8000/listTerms';

  const {data: terms, isPending: isPendingTerms, error: errorTerms} = useFetch(urlListTerms);

  return (
    <div className="register-student-for-term">
      <h2>Register Student For Courses Page</h2>

      { errorTerms && <div>{ errorTerms }</div> }
      { isPendingTerms && <div>Loading...</div> }
      { terms && <TermsList terms={terms} /> }

    </div>
  );
}
 
export default RegisterStudentForTerm;