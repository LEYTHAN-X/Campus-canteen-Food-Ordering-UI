import React from 'react';
import MenuItemCard from './MenuItemCard';

const Menu = ({ items, addToCart }) => {
    return (
        <div className="menu">
            {items.length === 0 ? (
                <p>No items found.</p>
            ) : (
                items.map(item => (
                    <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
                ))
            )}
        </div>
    );
};

export default Menu;
