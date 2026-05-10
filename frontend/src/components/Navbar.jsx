import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '#', label: 'Explore' },
        { path: '#', label: 'Blogs' },
        { path: '#', label: 'About Us' },
        { path: '#', label: 'Contact' },
    ];

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="logo">
                    <Link to="/">Suja Foods</Link>
                </div>
                
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.li 
                            key={link.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Link 
                                to={link.path} 
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <motion.div 
                                        className="active-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                <motion.div 
                    className="cart-icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link to="/cart">
                        <ShoppingCart />
                        <motion.span 
                            className="cart-count"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        >
                            0
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
