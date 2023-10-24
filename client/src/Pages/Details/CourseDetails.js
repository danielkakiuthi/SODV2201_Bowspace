import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import EditCourse from "../../Components/Edit/EditCourse";

const CourseDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/listCourses/${ id }`
  const { data: course, error, isPending } = useFetch(url);

  return (
    <div className="course-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { course && <EditCourse course={course} />}
    </div>
  );
}
 
export default CourseDetails;