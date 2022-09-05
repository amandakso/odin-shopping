import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from './Item';
import shoppingCart from './cart-variant.png';

const Shop = (props) => {
    let total = props.total;
    let cart = props.cart;
    console.log(cart);
    let addToCart = props.onClick;
    const [items, setItems] = useState([]);

    useEffect(() => {
        const nums = [2, 3, 7, 25, 50, 88, 101, 194, 216];
        /* for generating random numbers
        while (nums.length < 9) {
            let isNew = true;
            const num = Math.floor(Math.random() * 251);
            for (let k = 0; k < nums.length; k++) {
                if (nums[k] === num) {
                    isNew = false;
                };
            }
            if (isNew === true) {
                setNums(nums.concat(num));
            }
        }
        */
        fetchItems(nums);
    }, []);

    const fetchItems = async (nums) => {
        let items = [];
        for (let i = 0; i < nums.length; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/item/${nums[i]}/`);
            const response = await data.json();
            items = items.concat(response);
        }
        setItems(items);  
    }


    return (
        <div>
            <h1>Shop Page</h1>
            <h2><Link className="cart-link" to="/cart"><img src={shoppingCart} alt="shopping cart"></img>({total})</Link></h2>
            <div className="cards">
                {items.map((item) => (
                    <Link to={`/shop/${item.id}`}><Item key={item.id} item={item} cart={cart} onClick={addToCart}/></Link>
                ))}
            </div>

        </div>
    );
};

export default Shop;