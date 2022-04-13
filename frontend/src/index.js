import React, { useState, useEffect } from "react"; 
import "./index.css";
import axios from 'axios';



const App = () => {

    useEffect(async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
    
        setData(result.data);
      });

      const [data, setData] = useState({ hits: [] });

      return (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
