import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import './App.css';

const App = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onClick={addToCart} total={total}/>} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
