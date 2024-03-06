import { useState, useEffect } from "react";
import { ClubCard, Spinner } from "../components";
import { clubsIntro } from "../constants/clubs";
import clubIntro from "../assets/clubs/club-intro.webp";
import search from "../assets/search/search.svg";
import "../styles/Clubs.css";

export default function Clubs() {
  // API_URL
  const API_URL = process.env.REACT_APP_API_URL;

  // useState
  const [clubList, setClubList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const getClubs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/clubs`);
        const data = await response.json();
        // console.log(data); 
        setClubList(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      };
    };
    getClubs();
  }, [loading, API_URL]);

  return (
    <>
      <div className="clubs">
        <div className="clubs__wrapper">
          <div className="clubs__main">
            <div className="clubs__top">
              <img src={clubIntro} alt="sailing yacht in ocean" />
            </div>
            <div className="clubs__bottom">
              {clubsIntro.map((item) => (
                <div key={item.id}>
                  <h2>{item.header}</h2>
                  <p>{item.text_intro}</p>
                  <p>{item.text_main}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="clubList__wrapper">
          <form className="clubList__search" onSubmit={handleSubmit}>
            <input
              id="search"
              type="text"
              placeholder="Search Club by Name or City"
              onChange={handleChange}
            />
            <img src={search} alt="search logo" />
          </form>
          {!loading ? (
            <Spinner />
          ) : (
            <div className="clubList__grid">
              {/* filter club's name, city, or state either in capital, or all lowercase */}
              {clubList.filter((club) => club.name.toLowerCase().includes(query) || club.name.includes(query) || club.city.toLowerCase().includes(query) || club.city.toLowerCase().includes(query) || club.city.includes(query) || club.state.includes(query)).map((club) => (
                <ClubCard
                  key={club.id}
                  id={club.id}
                  name={club.name}
                  address={club.address}
                  city={club.city}
                  state={club.state}
                  zip={club.zip}
                  lat={club.lat}
                  lon={club.lon}
                  snake={club.snake}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}