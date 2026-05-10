import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products as allProducts } from '../data/products';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import './Products.css';

const categories = ["All", "Fruits", "Vegetables", "Meals", "Snacks", "Emergency Kits"];

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Filter and sort logic
    let filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <motion.div 
            className="products-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="page-header">
                <div className="container">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.2 }}
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: 0.3 }}
                    >
                        Discover our range of premium freeze-dried superfoods.
                    </motion.p>
                </div>
            </div>

            <div className="container">
                <div className="products-layout">
                    {/* Sidebar / Filters */}
                    <motion.aside 
                        className="filters-sidebar"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="filter-group">
                            <h3 className="filter-title">
                                <Search size={18} /> Search
                            </h3>
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="filter-group">
                            <h3 className="filter-title">
                                <Filter size={18} /> Categories
                            </h3>
                            <ul className="category-list">
                                {categories.map(category => (
                                    <li key={category}>
                                        <button 
                                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.aside>

                    {/* Main Products Area */}
                    <div className="products-main">
                        <motion.div 
                            className="products-toolbar"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="results-count">
                                Showing <motion.span key={filteredProducts.length} initial={{ scale: 1.5 }} animate={{ scale: 1 }}>{filteredProducts.length}</motion.span> results
                            </div>
                            <div className="sort-control">
                                <SlidersHorizontal size={18} />
                                <select 
                                    value={sortBy} 
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="newest">Newest Arrivals</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="popular">Popularity</option>
                                </select>
                            </div>
                        </motion.div>

                        <motion.div layout className="product-grid">
                            <AnimatePresence>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <motion.div
                                            key={product.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <ProductCard 
                                                product={product} 
                                                index={index} 
                                                onImageClick={setSelectedProduct}
                                            />
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div 
                                        className="no-results"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <h3>No products found</h3>
                                        <p>Try adjusting your search or filters.</p>
                                        <button className="btn primary-btn" onClick={() => {
                                            setSearchTerm('');
                                            setSelectedCategory('All');
                                        }}>Clear Filters</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            <ProductModal 
                product={selectedProduct} 
                isOpen={!!selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        </motion.div>
    );
};

export default Products;
