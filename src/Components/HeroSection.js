import React from 'react';
import '../styles/main.css';
import CoffeeBeans from '../Imgs/CoffeeBeans.png';

const HeroSection = ({ onNavigate }) => {
    return (
        <section className="Two-Sections" >
            <div className="div1">
                <p id="p1">Hug in a Mug</p>
                <p id="p2">Make your day great with our special coffee!</p>
                <p id="p3">Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.</p>
                <button className="btn" onClick={() => onNavigate('contact')}>Order Now</button>
                <button className="btn" onClick={() => onNavigate('contact')}>Contact Us</button>
            </div>
            <div className="div2">
                <img src={CoffeeBeans} alt="Coffee Beans" />
            </div>
        </section>
    );
};

export default HeroSection;
