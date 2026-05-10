import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products } from '../data/products';
import { Leaf, Apple, Clock, Heart } from 'lucide-react';
import './Home.css';

// Get first 3 products for featured section
const featuredProducts = products.slice(0, 3);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <motion.div 
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.h1 variants={itemVariants}>Nature's Nutrition, Perfectly Preserved</motion.h1>
                        <motion.p variants={itemVariants}>Premium dehydrated superfoods that retain 97% of their original nutrients. Perfect for your healthy lifestyle.</motion.p>
                        <motion.div variants={itemVariants}>
                            <Link to="/products" className="btn primary-btn btn-lg">Explore Now</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <div className="container">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Products
                    </motion.h2>
                    <div className="product-grid">
                        {featuredProducts.map((product, index) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                index={index} 
                                onImageClick={setSelectedProduct}
                            />
                        ))}
                    </div>
                    <motion.div 
                        className="view-all"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/products" className="btn secondary-btn">View All Products</Link>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits">
                <div className="container">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Suja Foods?
                    </motion.h2>
                    <motion.div 
                        className="benefits-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="benefit-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }}>
                            <div className="benefit-icon"><Leaf size={48} /></div>
                            <h3>100% Natural</h3>
                            <p>No preservatives, no additives. Just pure, natural goodness in every package.</p>
                        </motion.div>
                        <motion.div className="benefit-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }}>
                            <div className="benefit-icon"><Apple size={48} /></div>
                            <h3>Nutrient-Rich</h3>
                            <p>Our gentle dehydration process retains 97% of the original nutrients.</p>
                        </motion.div>
                        <motion.div className="benefit-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }}>
                            <div className="benefit-icon"><Clock size={48} /></div>
                            <h3>Longer Shelf Life</h3>
                            <p>Enjoy fresh taste and nutrition for up to 12 months without refrigeration.</p>
                        </motion.div>
                        <motion.div className="benefit-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }}>
                            <div className="benefit-icon"><Heart size={48} /></div>
                            <h3>Heart Healthy</h3>
                            <p>Support your cardiovascular health with our nutrient-dense superfoods.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.div 
                        className="testimonial-slider"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="testimonial-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <div className="testimonial-text">
                                "I've tried many dehydrated fruit brands, but Suja Foods' quality is exceptional. The fruits actually taste fresh!"
                            </div>
                            <div className="testimonial-author">
                                <div className="author-name">Sarah M.</div>
                                <div className="author-title">Fitness Enthusiast</div>
                            </div>
                        </motion.div>
                        <motion.div className="testimonial-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <div className="testimonial-text">
                                "These snacks have become my go-to for hiking trips. Lightweight, nutritious, and absolutely delicious."
                            </div>
                            <div className="testimonial-author">
                                <div className="author-name">James T.</div>
                                <div className="author-title">Adventure Traveler</div>
                            </div>
                        </motion.div>
                        <motion.div className="testimonial-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <div className="testimonial-text">
                                "My kids love the fruit mixes. Finally found healthy snacks they actually enjoy!"
                            </div>
                            <div className="testimonial-author">
                                <div className="author-name">Lisa K.</div>
                                <div className="author-title">Mother of Two</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <div className="container">
                    <motion.div 
                        className="newsletter-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Join Our Healthy Community</h2>
                        <p>Subscribe to receive healthy recipes, nutrition tips, and exclusive offers.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" required />
                            <motion.button 
                                type="submit" 
                                className="btn primary-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <ProductModal 
                product={selectedProduct} 
                isOpen={!!selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        </div>
    );
};

export default Home;
