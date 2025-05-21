import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching message'));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">React + Express App</h1>
      <p className="lead">{message}</p>
    </div>
  );
}

export default App;
