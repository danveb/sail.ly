import { ClubCard } from "./ClubCard"; 
import { clubsList } from "../constants/clubs";
import "../styles/ClubList.css"; 

function strToSnake(str) {
    let newStr = ""; 
    let hyphen = "-"; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            newStr += str[i].toLowerCase(); 
        } else {
            newStr += hyphen;
        }
    };
    return newStr; 
};

export const ClubList = () => {

    return (
        <div className="clubList">
            <div className="clubList__wrapper">
                <div className="clubList__grid">
                    {clubsList.map((club) => (
                        <ClubCard
                            key={club.id}
                            id={strToSnake(club.name)}
                            name={club.name}
                            address={club.address}
                            city={club.city}
                            state={club.state}
                            zip={club.zip}
                            lat={club.lat}
                            lon={club.lon}
                            tel={club.tel}
                            url={club.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}