import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import menuItemsData from '../data/menuItems';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(menuItemsData);
    const [cartItems, setCartItems] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);

    const categories = [...new Set(menuItemsData.map(item => item.category))];

    useEffect(() => {
        let items = menuItemsData;

        if (selectedCategory !== 'All') {
            items = items.filter(item => item.category === selectedCategory);
        }

        if (searchTerm.trim() !== '') {
            items = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredItems(items);
    }, [searchTerm, selectedCategory]);

    const addToCart = (item, quantity) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                );
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(i => i.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const proceedToCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <div className="container">
            <Header />
            {!showCheckout ? (
                <>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    <div className="main-content">
                        <Menu items={filteredItems} addToCart={addToCart} />
                        <Cart
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                            proceedToCheckout={proceedToCheckout}
                        />
                    </div>
                </>
            ) : (
                <div className="order-confirmation">
                    <h2>Thank you for your order!</h2>
                    <p>Your order is being processed.</p>
                    <button onClick={() => {
                        clearCart();
                        setShowCheckout(false);
                    }}>Back to Menu</button>
                </div>
            )}
        </div>
    );
};

export default Home;
