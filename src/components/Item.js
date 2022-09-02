import React, { useState, useEffect } from "react";

const Item = (props) => {
    const [amount, setAmount] = useState(0);
    const item = props.item;
    const image = item.sprites.default;
    const itemName = (item.name);
    const cart = props.cart;

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            if (parseInt(cart[i].id) === item.id) {
                setAmount(cart[i].quantity);
            }
        }  
    }, [cart, item.id])

    const subtractItem = (e) => {
        e.preventDefault();
        if (amount - 1 < 0) {
            return;
        } else {
            setAmount(amount => amount - 1);
        }
    }

    const addItem = (e) => {
        e.preventDefault();
        if ((parseInt(amount) + 1) > 999) {
            return;
        } else {
            setAmount(amount => parseInt(amount) + 1);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const findItem = document.querySelector(`.${itemName}`);
        setAmount(findItem.value);
    }


    return (
        <div className="card">
            <div>Name: {item.name}</div>
            <img className="itemImg" src={image} alt={item.name}></img>
            <div>Cost: {item.cost}</div>
            <form>
                <button onClick={subtractItem}>-</button>
                <input className={item.name} type="number" placeholder="0" min="0" max="999"value={amount} onChange={handleChange} />
                <button onClick={addItem}>+</button>
                <button name={item.id} value ={amount} onClick={props.onClick}>Add to Cart</button>
            </form>
        </div>
    );
};

export default Item;