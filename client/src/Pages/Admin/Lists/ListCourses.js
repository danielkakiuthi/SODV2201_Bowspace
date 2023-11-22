import { Link, useNavigate } from "react-router-dom";

const ListCourses = ({ courses }) => {

  const navigate = useNavigate();

  return (
    <div className="courses-list">
      <h1>Courses List:</h1>
      {courses.map((course) => (
        <div className="preview" key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <h2>[id Course: {course.id}] {course.codeCourse} - {course.nameCourse}</h2>
            <p>{course.descriptionCourse}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addCourse')}>Add Course</button>
    </div>
  );
}
 
export default ListCourses;