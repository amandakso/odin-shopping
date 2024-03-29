import React, { useState, useEffect } from "react";
import Item from './Item';

const ShoppingCart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const addToCart = props.onClick;
    const items = props.items
    const [shoppingItems, setShoppingItems] = useState([]);


 

    useEffect(() => {
        fetchItems(items);
    }, [items]);


    const fetchItems = async (items) => {
        let shoppingCart = [];
        for (let i = 0; i < items.length; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/item/${items[i]}/`);
            const response = await data.json();
            shoppingCart = shoppingCart.concat(response);
        }
        setShoppingItems(shoppingCart); 
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cards">
                {shoppingItems.map((shoppingItem) => (
                    <Item key={shoppingItem.id} item={shoppingItem} cart={cart} onClick={addToCart}/>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCart;