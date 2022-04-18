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
  
  const [order, setOrder] = useState('ASC');
    const sorting = (col) => {
      if (order === "ASC"){
        const sorted = [...data].sort((a,b)=>
          String(a[col]).toLowerCase() > String(b[col]).toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("DSC")
      }
      if (order === "DSC"){
        const sorted = [...data].sort((a,b)=>
        String(a[col]).toLowerCase() < String(b[col]).toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("ASC")
      }
    }

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
//code after <tr></tr>
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr> 
            <th onClick={() => sorting("student._id")}>Student ID</th>
            <th onClick={() => sorting("student.full_name")}>Full Name</th>
            <th onClick={() => sorting("course.course_name")}>Course Name</th>
            <th onClick={() => sorting("unix_timestamp")}>Registration Time</th>
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

