import { Link, useNavigate } from "react-router-dom";

const CoursesList = ({ courses }) => {

  const navigate = useNavigate();

  return (
    <div className="courses-list">
      <h2>Courses List:</h2>
      {courses.map((course) => (
        <div className="course-preview" key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <p>id Course: {course.id} | codeCourse: {course.codeCourse} | nameCourse: {course.nameCourse}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => navigate('/addCourse')}>Add Course</button>
    </div>
  );
}
 
export default CoursesList;