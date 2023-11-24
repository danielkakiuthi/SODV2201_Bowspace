import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import EditCourse from "../../../Components/Edit/EditCourse";

const DetailsCourse = ({ loggedUser, setLoggedUser }) => {
  const { id } = useParams();
  const urlListCourse = `http://localhost:8000/listCourses/${ id }`
  const { data: course, error, isPending } = useFetch(urlListCourse);
  const urlListUsers = `http://localhost:8000/listUsers`
  const { data: users } = useFetch(urlListUsers);

  return (
    <div className="course-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { course && <EditCourse course={course} users={users} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}
    </div>
  );
}
 
export default DetailsCourse;