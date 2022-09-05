import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import ItemDetails from "./components/ItemDetails";
import './App.css';

const App = () => {


  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const addToCart = (e) => {
    e.preventDefault();
    let cartItem = {
        id: e.target.name,
        quantity: e.target.value,
    };
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
        let currentItems = [];
        for (let k = 0; k < newCart.length; k++) {
          currentItems = currentItems.concat(newCart[k].id);
        }
        setCart(newCart);
        setTotal(num);
        setItems(currentItems)
    }
}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onClick={addToCart} total={total} cart={cart}/>} />
          <Route path="/cart" element={<ShoppingCart onClick={addToCart} cart={cart} items={items}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
