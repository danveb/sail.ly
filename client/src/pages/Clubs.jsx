// import { ClubList } from "../components/ClubList";
import { clubsIntro } from "../constants/clubs";
import clubIntro from "../assets/clubs/club-intro.jpg"; 
import "../styles/Clubs.css"; 
import { useState, useEffect } from "react"; 
import axios from "axios"; 
import { Spinner } from "../components/Spinner";
import search from "../assets/search/search.svg"; 
import { ClubCard } from "../components/ClubCard";

export const Clubs = () => {
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
                const response = await axios.get("/api/clubs"); 
                console.log(response); 
                setClubList(response.data); 
                setLoading(true); 
            } catch(error) {
                console.log(error); 
            };
        };
        getClubs(); 
    }, [loading]);

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
                            {clubList.filter((club) => club.name.toLowerCase().includes(query) || club.city.includes(query)).map((club) => (
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
                                    tel={club.tel}
                                    url={club.url}
                                    snake={club.snake}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* <ClubList /> */}
        </>
    )
}