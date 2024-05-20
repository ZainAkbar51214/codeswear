import { useState, useEffect } from 'react';
import '../src/app/globals.css';
import RootLayout from '../src/app/layout';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps, prop }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  // useEffect 
  useEffect(() => {
    console.log("Hey I am useEffect from _app.js");

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(cart);
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  // Local Storage data
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subT = 0;
    let keys = Object.keys(myCart);
    for(let i=0; i<keys.length; i++){
      subT += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  }

  // Add to cart function
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    console.log(newCart);
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {qty: 1, price, name, size, variant}
    }
    setCart(newCart);
    saveCart(newCart);
  }

  // Remove from cart function
  const removeToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode]["qty"] = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }

  return (
    <RootLayout>
      <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </RootLayout>
  );
}

export default MyApp;