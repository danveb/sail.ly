import { Link } from "react-router-dom";
import yachtClub from "../assets/clubs/yacht-club.webp";
import "../styles/ClubCard.css";

export default function ClubCard({ name, address, city, state, zip, lat, lon, snake }) {
  // check if lat/lon received are numbers
  // use .toFixed() method to 2 decimal places
  function fixLatLon(num) {
    if (typeof num === "number") {
      return num.toFixed(2);
    };
    return num;
  };

  return (
    <div className="clubCard" data-testid="clubCard">
      <Link to={`/clubs/${snake}`}>
        <img
          src={yachtClub}
          alt="yacht club"
          className="clubCard__img"
        />
      </Link>
      <div className="clubCard__details">
        <h4>
          <Link to={`/clubs/${snake}`}>
            {name}
          </Link>
        </h4>
        <p>{address}</p>
        <p>{city}, {state} {zip}</p>
        <span>Latitude: {fixLatLon(lat)}°</span>
        <span>Longitude: {fixLatLon(lon)}°</span>
      </div>
    </div>
  )
}