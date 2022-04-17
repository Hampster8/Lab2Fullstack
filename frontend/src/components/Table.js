import React, {useState, useEffect} from 'react';

const Table = () => {

  const getDb = (dbName) => {
    fetch(`/api/${dbName}`)
    .then(res => res.json())
    .then(data => {console.log(data)})
    .catch(err => console.error(err))
  }
  
  const [data, setData] = useState([]);
  useEffect(() =>{
    getDb("student")
    getDb("course")
    getDb("latest")
  },[])

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
        { data.map((item,key) =>{
          return (
            <tr key={key}>
              <td>{item.student._id}</td>
              <td>{item.student.full_name}</td>
              <td>{item.course.name}</td>
              <td>{item.registration.unix_timestamp}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
};

export default Table;

