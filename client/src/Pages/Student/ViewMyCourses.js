const ViewMyCourses = ({ loggedUser, programs, terms, courses }) => {

  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));
  const myCourses = courses.filter((course) => (loggedUser.currentIdCourses.some(v => (v===course.id))));

  return (
    <div className='viewMyCoursesPage'>
      
      <h1>My Courses</h1>
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
          {myCourses.map((course) => (
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

export default ViewMyCourses;

