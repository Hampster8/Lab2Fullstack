import React from 'react';
import { createRoot } from 'react-dom/client';
import Table from './src/components/Table';

const App = () => {
  return (
    <div className="table_container">
      <Table />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
