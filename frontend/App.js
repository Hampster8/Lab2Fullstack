import React from 'react';
import { createRoot } from 'react-dom/client';
import Table from './src/components/Table';
import './src/index.css'


const App = () => {
  return (

    <div className="container">
      <h1 align="center">Recent Registrations</h1>
      <div className="table table-bordered">
        <Table />
      </div>
    </div>

  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
