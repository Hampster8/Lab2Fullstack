import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';


function App() {

    useEffect(async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
    
        setData(result.data);
      });

      const [data, setData] = useState({ hits: [] });

      return (
        <>
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        </>
      );
}

ReactDOM.createRoot(document.getElementById("root")).render(< App />);
