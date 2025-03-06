"use client";
import { useState, useEffect } from "react";

export default function WeatherPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5194/weatherforecast')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('API Error:', error));
  }, []);

  return (
    <div>
      {data.length ? data[0] : 'Loading...'}
    </div>
  );
}
