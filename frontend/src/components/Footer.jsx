import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Suja Foods</h3>
                        <p>Premium dehydrated superfoods for your healthy lifestyle.</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Shop</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><Link to="#">Shipping Policy</Link></li>
                            <li><Link to="#">Return Policy</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li><MapPin size={18} /> <span>123, Office Address</span></li>
                            <li><Phone size={18} /> <span>(555) 123-4567</span></li>
                            <li><Mail size={18} /> <span>hello@sujafoods.com</span></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Suja Foods. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
