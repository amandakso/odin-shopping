import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from './Item';
import shoppingCart from './cart-variant.png';

const Shop = () => {

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const nums = [2, 3, 7, 25, 50, 88, 101, 194, 216]
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
        let items = []
        for (let i = 0; i < nums.length; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/item/${nums[i]}/`);
            const response = await data.json();
            items = items.concat(response);
        }
        setItems(items);  
    }

    const addToCart = (e) => {
        e.preventDefault();
        let cartItem = {
            id: e.target.name,
            quantity: e.target.value,
        };
        console.log(cartItem.quantity);
        if (parseInt(cartItem.quantity) > 999 || parseInt(cartItem.quantity) < 0) {
            return;
        } else {
            let newCart = cart;
            let setItem = false;
            if (cart.length === 0) {
                newCart = newCart.concat(cartItem);
            } else {
                for (let i = 0; i < newCart.length; i++) {
                    if (newCart[i].id === cartItem.id) {
                        newCart[i].quantity = cartItem.quantity;
                        setItem = true;
                    };
                };
                if (!setItem) {
                    newCart = newCart.concat(cartItem);
                }
    
            }
            let num = 0;
            for (let j = 0; j < newCart.length; j++) {
                num = num + parseInt(newCart[j].quantity);
            }
            setCart(newCart);
            setTotal(num);
        }
    }

    return (
        <div>
            <h1>Shop Page</h1>
            <h2><Link className="cart-link" to="/cart"><img src={shoppingCart} alt="shopping cart"></img>({total})</Link></h2>
            <div className="cards">
                {items.map((item) => (
                    <Item key={item.id} item={item} onClick={addToCart}/>
                ))}
            </div>

        </div>
    );
};

export default Shop;