import useFetch from '../Hooks/useFetch';

const ViewMyCourses = ({ loggedUser, programs, terms, courses }) => {

  // const urlListPrograms = 'http://localhost:8000/listPrograms';
  // const urlListTerms = 'http://localhost:8000/listTerms';
  // const urlListCourses = 'http://localhost:8000/listCourses';

  
  // const {data: programs} = useFetch(urlListPrograms);
  // const {data: terms} = useFetch(urlListTerms);
  // const {data: courses} = useFetch(urlListCourses);

  console.log(programs);
  console.log(terms);
  console.log(courses);

  const myPrograms = programs.filter((program) => (program.id === loggedUser.currentIdProgram));
  const myTerms = terms.filter((term) => (term.id === loggedUser.currentIdTerm));
  const myCourses = courses.filter((course) => (loggedUser.currentIdCourses.some(v => (v===course.id))));

  console.log(myPrograms);
  console.log(myTerms);
  console.log(myCourses);


  return (
    <div className='vmcbody'>
      {myPrograms.map((program) =>
        <ul>
          <li>Program Name: {program.nameProgram} </li>
        </ul>
      )}
      {myTerms.map((term) =>
        <ul>
          <li>Term #: {term.nameTerm}</li>
          <li>Start Date: {term.startTerm}</li>
          <li>End Date: {term.endTerm}</li>
        </ul>
      )}
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

