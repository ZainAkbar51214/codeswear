import { useState, useEffect } from 'react';
import '../src/app/globals.css';
import RootLayout from '../src/app/layout';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps, prop }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)

  // useEffect 
  useEffect(() => {
    console.log("Hey I am useEffect from _app.js");

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }

  }, [])


  // Local Storage data
  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subt = 0;
    let keys = Object.keys(myCart);
    for(let i=0; keys.length; i++){
      console.log(keys);
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  // Add to cart function
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {qty: 1, price, name, size, variant }
    }
    setCart(newCart);
    saveCart();
  }

  // Remove from cart function
  const removeToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart();
  }

  // Clear Function
  const clearCart = () => {
    setCart({});
    saveCart({});
  }
  return (
    <RootLayout>
      <Navbar cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </RootLayout>
  );
}

export default MyApp;
