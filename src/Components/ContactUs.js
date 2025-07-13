// src/components/ContactUs.js
import React from 'react';
import '../styles/main.css';

const ContactUs = () => {
    return (
        <section className="contact-us-section" style={{
            padding: '100px',
            textAlign: 'center',
            color: 'black',
            backgroundColor: 'white',
            minHeight: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '60px'
        }}>
            <h1 style={{ color: 'black'}}>Contact Us</h1>
            <p className="line" style={{ backgroundColor: '#f3961c', height: '6px', width: '70px', margin: '20px auto' }}></p>
            <p style={{ fontSize: '20px', marginBottom: '20px', color: 'black' }}>
                Have questions or want to place a special order? Reach out to us!
            </p>
            <p style={{ fontSize: '18px', color: 'black' }}>
                Email: info@cafecuddles.com
            </p>
            <p style={{ fontSize: '18px', color: 'black' }}>
                Phone: +1 (123) 456-7890
            </p>
            <p style={{ fontSize: '18px', color: 'black' }}>
                Address: 123 Coffee Lane, Brewtown, CA 90210
            </p>
        </section>
    );
};

export default ContactUs;
