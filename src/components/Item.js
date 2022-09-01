import React, { useState } from "react";

const Item = (props) => {
    const [amount, setAmount] = useState(0);
    const item = props.item;
    const image = item.sprites.default;
    const itemName = (item.name);

    const subtractItem = (e) => {
        e.preventDefault();
        setAmount(amount => amount - 1);
    }

    const addItem = (e) => {
        e.preventDefault();
        setAmount(amount => parseInt(amount) + 1);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const findItem = document.querySelector(`.${itemName}`);
        setAmount(findItem.value);
    }

    const addToCart = (e) => {
        e.preventDefault();
        console.log("add to cart");
    }

    return (
        <div className="card">
            <div>Name: {item.name}</div>
            <img className="itemImg" src={image} alt={item.name}></img>
            <div>Cost: {item.cost}</div>
            <form>
                <button onClick={subtractItem}>-</button>
                <input className={item.name}type="number" value={amount} onChange={handleChange} />
                <button onClick={addItem}>+</button>
                <button onClick={addToCart}>Add to Cart</button>
            </form>
        </div>
    );
};

export default Item;