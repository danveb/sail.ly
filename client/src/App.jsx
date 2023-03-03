import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Navbar } from "./components/Navbar";
import { MobileNavbar } from "./components/MobileNavbar";
import { Home } from "./pages/Home"; 
import { About } from "./pages/About"; 
import { Footer } from "./components/Footer";

export const App = () => {
    // menuOpen
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <div className="app">
            <Router>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
