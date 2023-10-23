const ViewMyCourses = () => {
  return (
    <div className="view-my-courses">
    
<html lang="pt-BR">
<head>
  <title>My Courses</title>
</head>
<body>
  <header>
    <h1>My Courses</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Program  Details</a>
      <a href="#">Help</a>
    </nav>
  </header>
  <main>
    <h2>Program Name</h2>
    <ul>
      <li>Program Name: </li>
      <li>Term: </li>
    </ul>
    <h2>Courses</h2>
    <table>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Start Date: </th>
          <th>End Date: </th>
          <th>Drop Date: </th>
          <th>Withdrawal Date:</th>
          <th>Credits: </th>
          <th>Campus</th>
          <th>Delivery Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Web Development</td>
          <td>2023-08-01</td>
          <td>2023-12-31</td>
          <td>2023-07-31</td>
          <td>2023-08-31</td>
          <td>3</td>
          <td>South Campus</td>
          <td>In Class</td>
        </tr>
        <tr>
          <td>Rapid Development</td>
          <td>2023-08-01</td>
          <td>2023-12-31</td>
          <td>2023-07-31</td>
          <td>2023-08-31</td>
          <td>2</td>
          <td>South Campus</td>
          <td>Real Class Online</td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>
    <p>Copyright © 2023 Bow Valley College. All rights reserved.</p>
  </footer>
</body>
</html>

    </div>
  );
}
 
export default ViewMyCourses;