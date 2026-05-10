import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, CheckCircle, Info } from 'lucide-react';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('Standard Pack');

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            <motion.div 
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdropClick}
            >
                <motion.div 
                    className="modal-content"
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className="modal-grid">
                        <div className="modal-image-col">
                            <div className="modal-main-image">
                                <img src={product.image} alt={product.name} />
                                {product.stock === 0 && <div className="modal-out-of-stock">Out of Stock</div>}
                            </div>
                            <h2>{product.name}</h2>
                        </div>

                        <div className="modal-info-col">
                            <span className="modal-category">{product.category}</span>
                            
                            <p className="modal-description">{product.fullDescription}</p>

                            <div className="modal-features">
                                {product.features?.map((feature, i) => (
                                    <span key={i} className="feature-badge">
                                        <CheckCircle size={14} /> {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="modal-details-tabs">
                                <div className="details-section">
                                    <h3><Info size={18} /> Ingredients</h3>
                                    <p>{product.ingredients?.join(', ')}</p>
                                </div>
                                <div className="details-section">
                                    <h3>Nutrition Facts (Per Serving)</h3>
                                    <div className="nutrition-grid">
                                        <div className="nut-item"><span>Calories</span> <b>{product.nutrition?.calories}</b></div>
                                        <div className="nut-item"><span>Protein</span> <b>{product.nutrition?.protein}</b></div>
                                        <div className="nut-item"><span>Carbs</span> <b>{product.nutrition?.carbs}</b></div>
                                        <div className="nut-item"><span>Fats</span> <b>{product.nutrition?.fats}</b></div>
                                        <div className="nut-item"><span>Sodium</span> <b>{product.nutrition?.sodium}</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-actions">
                                <div className="variant-select">
                                    <label>Pack Size:</label>
                                    <select value={variant} onChange={(e) => setVariant(e.target.value)}>
                                        <option>Standard Pack</option>
                                        <option>Family Pack (+ Rs. 200)</option>
                                    </select>
                                </div>
                                
                                <div className="quantity-select">
                                    <label>Qty:</label>
                                    <div className="qty-controls">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= product.stock}>+</button>
                                    </div>
                                </div>

                                <motion.button 
                                    className="btn primary-btn modal-add-btn"
                                    disabled={product.stock === 0}
                                    whileHover={product.stock > 0 ? { scale: 1.02 } : {}}
                                    whileTap={product.stock > 0 ? { scale: 0.98 } : {}}
                                >
                                    <ShoppingCart size={20} /> 
                                    {product.stock > 0 ? 'Add to Cart' : 'Currently Unavailable'}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
