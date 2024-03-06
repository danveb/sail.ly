import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { About, Clubs, FAQ, Home, PrivacyPolicy, TermsAndConditions } from "./pages";
import { Club, Footer, Navbar, MobileNavbar } from "./components";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  // useState
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:name" element={<Club />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
