'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EventsList = () => {
  const [event, setEvent] = useState([]);
  const [result, setResult] = useState('');

  const fetchEven = async () => {
    const res = await axios.get('http://localhost:8000/events');
    const data = res.data;
    setEvent(data);
  };

  useEffect(() => {
    fetchEven();
  }, []);

  return (
    <>
      {event.map((event) => (
        <div key={event.id}>
          <h1 className="text-white">{event.title}</h1>
        </div>
      ))}
      <div>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default EventsList;
