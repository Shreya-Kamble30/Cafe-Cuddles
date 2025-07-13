import React from 'react';
import '../styles/main.css';

const Navbar = ({ onNavigate }) => {
    return (
        <nav className="navbar">
            <h1 className="logo">☕ Coffee</h1>
            <div className="nav-items">
                {/* Use onClick handlers to call onNavigate with the desired component name */}
                <a className="nav-link" onClick={() => onNavigate('home')}>Home</a>
                <a className="nav-link" onClick={() => onNavigate('about')}>About</a>
                <a className="nav-link" onClick={() => onNavigate('menu')}>Menu</a>
                <a className="nav-link" onClick={() => onNavigate('gallery')}>Gallery</a>
                <a className="nav-link" onClick={() => onNavigate('contact')}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
