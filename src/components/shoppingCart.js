import React, { useState, useEffect } from "react";

const ShoppingCart = (props) => {
    const cart = props.cart;
    const [items, setItems] = useState([]);
 
    useEffect(() => {
        let currentItems = [];
        for (let i = 0; i < cart.length; i < i++) {
            currentItems = currentItems.concat(cart[i].id);
        };
        setItems(currentItems);
    }, [cart]);

    return (
        <h1>Shopping Cart</h1>
    );
};

export default ShoppingCart;