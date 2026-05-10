import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, index = 0, onImageClick }) => {
    return (
        <motion.div 
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
        >
            <div 
                className="product-image" 
                onClick={() => onImageClick && onImageClick(product)}
                style={{ cursor: 'pointer' }}
            >
                <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
                {product.stock === 0 && <div className="out-of-stock-badge">Out of Stock</div>}
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <div className="product-price">Rs. {product.price}</div>
                    <motion.button 
                        className="btn add-to-cart-btn" 
                        disabled={product.stock === 0}
                        whileHover={product.stock > 0 ? { scale: 1.05 } : {}}
                        whileTap={product.stock > 0 ? { scale: 0.95 } : {}}
                    >
                        <ShoppingCart size={18} /> Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
