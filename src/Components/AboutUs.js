import React from 'react';
import '../styles/main.css';
import AboutUsImg from '../Imgs/AboutUs.jpg';

const AboutUs = () => {
    return (
        <section className="aboutus">
            <div className="us">
                <img src={AboutUsImg} alt="About Us" />
            </div>
            <div className="about">
                <h1>About Us</h1>
                <p className="line1"></p>
                <p>Our journey began with a love for coffee and a commitment to quality. We source our beans from sustainable farms around the world, ensuring each brew captures the rich flavors and aromas unique to its origin. Whether you prefer a bold espresso, a smooth latte, or a refreshing cold brew, our skilled baristas are here to create your ideal cup.</p>
            </div>
        </section>
    );
};

export default AboutUs;
