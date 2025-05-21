import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuItemCard = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        addToCart(item, quantity);
        setQuantity(1);
    };

    return (
        <motion.div
            className="menu-item-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
        >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="quantity-selector">
                <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <motion.button
                className="add-to-cart-btn"
                onClick={handleAdd}
                whileTap={{ scale: 0.95 }}
                whileHover={{ backgroundColor: '#0077cc', color: '#fff' }}
            >
                Add to Cart
            </motion.button>
        </motion.div>
    );
};

export default MenuItemCard;
