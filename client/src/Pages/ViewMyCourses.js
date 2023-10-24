import React from 'react';

class ViewMyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          code: 'DATA2201',
          name: 'Relational Databases',
          startDate: "2023 Set 01",
          endDate: "2023 Dec 31",
          dropDate: "2023 Set 15",
          withdrawalDate: "2023 Set 05",
          credits: 3,
          campus: "South",
          deliveryMode: "In Class"
        },
        {
          code: 'MGMT1104',
          name: 'IT Project Management',
          startDate: "2023 Set 01",
          endDate: "2023 Dec 31",
          dropDate: "2023 Set 15",
          withdrawalDate: "2023 Set 05",
          credits: 3,
          campus: "North",
          deliveryMode: "In Class"
        },
        {
          code: 'SODV2101',
          name: 'Rapid Application',
          startDate: "2023 Set 01",
          endDate: "2023 Dec 31",
          dropDate: "2023 Set 15",
          withdrawalDate: "2023 Set 05",
          credits: 3,
          campus: "South",
          deliveryMode: "Real-time Online"
        },
        {
          code: 'SODV2201',
          name: 'Web Application',
          startDate: "2023 Set 01",
          endDate: "2023 Dec 31",
          dropDate: "2023 Set 15",
          withdrawalDate: "2023 Set 05",
          credits: 3,
          campus: "South",
          deliveryMode: "Any-time Online"
        },
        {
          code: 'SODV2202',
          name: 'Object Oriented Programming',
          startDate: "2023 Set 01",
          endDate: "2023 Dec 31",
          dropDate: "2023 Set 15",
          withdrawalDate: "2023 Set 05",
          credits: 3,
          campus: "South",
          deliveryMode: "In Class"
        },
      ],
      program: [
        {
          name: 'Software Development',
          term: 3
        }
      ]
    };
  }

  render() {
    return (
      <div className='vmcbody'>
        {this.state.program.map((program, index) =>
          <ul>
            <li>Program Name: {program.name} </li>
            <li>Term: {program.term}</li>
          </ul>
        )}
        <h1>My Courses</h1>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Drop Date</th>
              <th>Withdrawal Date</th>
              <th>Credits</th>
              <th>Campus</th>
              <th>Delivery Mode</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((courses, index) => (
              <tr key={index}>
                <td>{courses.code}</td>
                <td>{courses.name}</td>
                <td>{courses.startDate}</td>
                <td>{courses.endDate}</td>
                <td>{courses.dropDate}</td>
                <td>{courses.withdrawalDate}</td>
                <td>{courses.credits}</td>
                <td>{courses.campus}</td>
                <td>{courses.deliveryMode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewMyCourses;

