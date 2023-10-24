import useFetch from '../Hooks/useFetch';
import CoursesList from '../Components/Lists/CoursesList';

const RegisterStudentForCourses = () => {

  const urlListCourses = 'http://localhost:8000/listCourses';

  const {data: courses, isPending: isPendingCourses, error: errorCourses} = useFetch(urlListCourses);

  return (
    <div className="register-student-for-courses">
      <h2>Register Student For Courses Page</h2>

      { errorCourses && <div>{ errorCourses }</div> }
      { isPendingCourses && <div>Loading...</div> }
      { courses && <CoursesList courses={courses} /> }
    </div>
  );
}
 
export default RegisterStudentForCourses;