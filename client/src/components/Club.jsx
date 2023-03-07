import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ClubMap } from "./ClubMap";
import { WeatherConditions } from "./WeatherConditions";
import "../styles/Club.css"; 

export const Club = () => {
    // useState
    const [club, setClub] = useState([]); 

    // useLocation
    const location = useLocation(); 
    const clubID = location.pathname.split("/")[2]; 

    // useEffect
    useEffect(() => {
        const getClub = async () => {
            const response = await axios.get(`/api/clubs/${clubID}`);             
            // console.log(response.data); 
            setClub(response.data); 
        };

        return () => {
            getClub(); 
        }
    }, [clubID]);

    return (
        <div className="club">
            <div className="club__wrapper">
                {club.map((c) => (
                    <div key={c.id} className="club__main">
                        <div className="club__info">
                            <h1>{c.name}</h1>
                            <p>{c.city}, {c.state} {c.zip}</p>
                            <span>Latitude: {c.lat.toFixed(2)}°</span>
                            <span>Longitude: {c.lon.toFixed(2)}°</span>
                        </div>
                        <div className="club__map">
                            <ClubMap latitude={c.lat.toFixed(2)} longitude={c.lon.toFixed(2)} />
                        </div>
                        <div className="club__weather">
                            {/* Weather Conditions */}
                            <WeatherConditions club={club} />
                        </div>
                    </div>
                ))}
            </div>
        </div>    
    )
}