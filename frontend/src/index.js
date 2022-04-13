import React from "react"; 
import { Table, Header, HeaderRow, Body, Row, Cell } from "@table-library/react-table-library";
import { useSortBy, HeaderCellSort} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";

function getRegistrations(){
    const URL = '/api/user';
    let data = fetch(URL)
    .then(res => res.json())
    .then(data => fillTable(data))
    .catch(e => alert(e));
}

function createStudent(){
    const URL = `/api/user`
    let data = {
        name: document.getElementById("name").value, 
        age: document.getElementById("age").value
    }
    let response = fetch(URL,{
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}



const App = () => {
    return(
            <table>
                <caption>Latest 5 Registers</caption>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student name</th>
                            <th>Course name</th>
                            <th>Registration time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                        ))}
                    </tbody>
            </table>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
