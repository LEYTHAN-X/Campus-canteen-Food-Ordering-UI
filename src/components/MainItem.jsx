export default function MainItem({ item, onAddToCart }) {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
    );
}
