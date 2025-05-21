import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="category-filter">
            <button
                className={selectedCategory === 'All' ? 'active' : ''}
                onClick={() => setSelectedCategory('All')}
            >
                All
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={selectedCategory === cat ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
