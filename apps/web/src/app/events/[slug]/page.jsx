'use client';
import React from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';

export default function EventDetail() {
  const [event, setEvent] = useState([]);
  const { slug } = useParams();

  const fetchEvents = async () => {
    const response = await axios.get(`http://localhost:8000/events/${slug}`);
    const data = response.data;
    setEvent(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <h1>{event.title}</h1>
      {/* {event.map((event) => {
        <div key={event.id}>
          <h1>{event.title}</h1>
        </div>;
      })} */}
    </>
  );
}
