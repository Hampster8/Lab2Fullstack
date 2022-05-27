const tableData = () => {
    data.map((item,key) =>{
        return (
        <tr key={key}>
            <td>{item.student._id}</td>
            <td>{item.student.full_name}</td>
            <td>{item.course.course_name}</td>
            <td>{item.unix_timestamp}</td>
        </tr>
        )
    })
}
