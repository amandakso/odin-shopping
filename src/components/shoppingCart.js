import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from './Item';

const ShoppingCart = (props) => {
    const cart = props.cart;
    const addToCart = props.onClick;
    const items = props.items
    const [shoppingItems, setShoppingItems] = useState([])
 

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
                    <Link key={shoppingItem.id} to={`/shop/${shoppingItem.id}`}><Item item={shoppingItem} cart={cart} onClick={addToCart}/></Link>
                ))}
            </div>

        </div>
    );
};

export default ShoppingCart;