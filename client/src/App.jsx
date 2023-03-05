import { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import { Navbar } from "./components/Navbar";
import { MobileNavbar } from "./components/MobileNavbar";
import { Home } from "./pages/Home"; 
import { About } from "./pages/About"; 
import { Clubs } from "./pages/Clubs"; 
import { Climate } from "./pages/Climate"; 
import { Club } from "./components/Club"; 
import { Footer } from "./components/Footer";

const ScrollToTop = () => {
    const { pathname } = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);
    return null; 
}; 

export const App = () => {
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
                    <Route path="/clubs/:id" element={<Club />} />
                    <Route path="/climate" element={<Climate />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
