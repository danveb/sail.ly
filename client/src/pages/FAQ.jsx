import { FAQItem } from "../components";
import faq from "../assets/faq/faq.webp";
import "../styles/FAQ.css";

export default function FAQ() {
  return (
    <div className="faq">
      <div className="faq__wrapper">
        <div className="faq__main">
          <div className="faq__top">
            <img src={faq} alt="sailing yacht in ocean" />
          </div>
          <div className="faq__bottom">
            <FAQItem />
          </div>
        </div>
      </div>
    </div>
  )
}