import React from 'react';
import '../styles/main.css';
import Gallery1 from '../Imgs/gallery-1.jpg';
import Gallery2 from '../Imgs/gallery-2.jpg';
import Gallery3 from '../Imgs/gallery-3.jpg';
import Gallery4 from '../Imgs/gallery-4.jpg';

const Gallery = () => {
    const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4];

    return (
        <section className="gallery">
            <h1>Delicious Moments</h1>
            <p className="line"></p>
            <ul className="gallery-items">
                {galleryImages.map((imgSrc, index) => (
                    <li key={index}>
                        <img src={imgSrc} alt={` ${index + 1}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Gallery;
