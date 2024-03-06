import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner, WeatherConditions } from "../components";
import "../styles/Club.css";

export default function Club() {
  // API_URL 
  const API_URL = process.env.REACT_APP_API_URL;

  // useState
  const [club, setClub] = useState([]);
  const [loading, setLoading] = useState(false);

  // useLocation
  const location = useLocation();
  const clubID = location.pathname.split("/")[2];

  // useEffect
  useEffect(() => {
    const getClub = async () => {
      const response = await fetch(`${API_URL}/api/clubs/${clubID}`);
      const data = await response.json();
      // console.log(typeof data[0].lat); // number
      setLoading(true);
      setClub(data);
    };
    getClub();
  }, [clubID, loading, API_URL]);

  return (
    <div className="club" data-testid="club">
      {!loading ? (
        <Spinner />
      ) : (
        <div className="club__wrapper">
          {club.map((c) => (
            <div key={c.id} className="club__main">
              <div className="club__info">
                <h1>{c.name}</h1>
                <p>{c.city}, {c.state} {c.zip}</p>
                <span>Latitude: {c.lat.toFixed(2)}°</span>
                <span>Longitude: {c.lon.toFixed(2)}°</span>
              </div>
              <div className="club__weather">
                <WeatherConditions club={club} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}