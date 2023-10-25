import CoursesList from '../Components/Lists/CoursesList';

const RegisterStudentForCourses = ({ loggedUser, courses }) => {

  //const myCourses = courses.filter((course) => (loggedUser.currentIdCourses.some(v => (v===course.id))));
  const otherCourses = courses.filter((course) => (loggedUser.currentIdCourses.some(v => (v!==course.id))));
  

  return (
    <div className="register-student-for-courses">
      <h2>Register Student For Courses Page</h2>
      { otherCourses && <CoursesList courses={otherCourses} /> }
    </div>
  );
}
 
export default RegisterStudentForCourses;