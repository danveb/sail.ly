import { Link } from "react-router-dom"; 
import yachtClub from "../assets/clubs/yacht-club.jpg"; 
import "../styles/ClubCard.css"; 

export const ClubCard = ({ id, name, address, city, state, zip, lat, lon, tel, url }) => {
    return (
        <div className="clubCard">
            <Link to={`/clubs/${id}`}>
                <img
                    src={yachtClub}
                    alt="yacht club"
                    className="clubCard__img"
                />
            </Link>
            <div className="clubCard__details">
                <h4>{name}</h4>
                <p>{address}</p>
                <p>{city}, {state} {zip}</p>
                <span>Latitude: {lat.toFixed(2)}°</span>
                <span>Longitude: {lon.toFixed(2)}°</span>
            </div>
        </div>
    )
}