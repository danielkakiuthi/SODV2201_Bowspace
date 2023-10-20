import useFetch from '../Hooks/useFetch';
import UsersList from '../Components/UsersList';

const Home = () => {

  const urlListUsers = 'http://localhost:8000/listUser';
  const {data: users, isPending, error} = useFetch(urlListUsers);


  return (
    <div className="home">
      <h2>Home Page</h2>
      <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { users && <UsersList users={users} /> }
      </div>
    </div>
  );
}
 
export default Home;