import React, { useState, useEffect } from "react"; 
import ReactDOM from 'react-dom/client';
import Registration from "../../backend/src/models/Registration";


function App() {

    const [registration, setRegistration] = useState([]);  

    useEffect(() => {
        fetch('http://localhost:3000/api/registration', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(resp => resp.json())
        .then(data => setRegisters(data))
        setData(result.data);
      });

      const [data, setData] = useState({ hits: [] });

      return (
        <>
          <div>
            <Registration registration={registration}/>
          </div>
        </>
      );
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
