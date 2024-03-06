import chevronDown from "../assets/home/chevron-down.svg";
import { home } from "../constants/home";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__top">
          <div className="home__top--title">
            {home.map((h) => (
              <div key={h.id}>
                <h1>{h.title}</h1>
                <h3>{h.subtitle}</h3>
              </div>
            ))}
          </div>
          <div className="home__top--bg"></div>
          <img src={chevronDown} alt="chevron down arrow" />
        </div>
      </div>
    </div>
  )
}