import useFetch from "../../Hooks/useFetch";

const ViewMyPastCourses = ({ loggedUser, programs, terms, courses }) => {

  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));

  console.log(`loggedUser.currentIdCourses: ${loggedUser.currentIdCourses}`);
  const myPastCourses = courses.filter((course) => (loggedUser.finishedIdCourses.some(v => (v===course.id))));

  return (
    <div className='viewMyCoursesPage'>
      
      <h1>My Past Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Credits</th>
            <th>Fee</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {myPastCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.codeCourse}</td>
              <td>{course.nameCourse}</td>
              <td>{course.creditCourse}</td>
              <td>{course.feeCourse}</td>
              <td>{course.descriptionCourse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewMyPastCourses;

