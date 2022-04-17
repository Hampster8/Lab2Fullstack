import React, {useState, useEffect} from 'react';

const Table = () => {
  const getDb = () => {
    fetch('/api/latest')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err))
  }
  
  const [data, setData] = useState([]);
  useEffect(() =>{
    getDb()
  },[])
const tableData = data.map((item,key) =>{
  return (
    <tr key={key}>
      <td>{item.student._id}</td>
      <td>{item.student.full_name}</td>
      <td>{item.course.course_name}</td>
      <td>{item.unix_timestamp}</td>
    </tr>
  )
})
  return (
    <div className="table_container">
      <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Full Name</th>
          <th>Course Name</th>
          <th>Registration Time</th>
        </tr>
      </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

