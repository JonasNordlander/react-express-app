import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Error fetching message'));
  }, []);

  return (
    <div>
      <h1 className="text-primary">React + Express App</h1>
      <p className="lead">{message}</p>
    </div>
  );
}

export default Home;
