// src/App.js
import React, { useState } from 'react'; // Import useState hook
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './styles/main.css';

function App() {
    // State to keep track of which "page" is currently active
    const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

    // Function to render the correct component based on currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HeroSection onNavigate={setCurrentPage} />;
            case 'about':
                return <AboutUs />;
            case 'menu':
                return <Menu />;
            case 'gallery':
                return <Gallery />;
            case 'contact':
                return <ContactUs />;
            default:
                return <HeroSection />; // Fallback to home
        }
    };

    return (
        <div className="App">
            {/* Pass setCurrentPage function to Navbar so it can update the state */}
            <Navbar onNavigate={setCurrentPage} />

            {/* Render the currently active page */}
            {renderPage()}

            <Footer />
        </div>
    );
}

export default App;
