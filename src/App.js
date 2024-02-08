import Section from "./Component/Section"
import Cart from "./Component/Cart"
import { useState, useEffect } from "react";
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
function App() {
const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const getItemQuantityInCart = (productName) => {
  const itemInCart = cartItems.find((item) => item.name === productName);
  return itemInCart ? itemInCart.quantity : 0;
  };
    const removeItemFromCart = (productName) => {
  setCartItems(prevCartItems => {
    const updatedCart = prevCartItems.filter(item => item.name !== productName);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    return updatedCart;
  });
};
 const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
 };
    const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);


const updateCartItemQuantity = (productName, newQuantity) => {
  setCartItems(prevCartItems => {
    const updatedCart = prevCartItems.map(item => {
      if (item.name === productName) {
        // Ensure the new quantity is at least 0
        const quantity = Math.max(0, newQuantity);
        // Remove the item from the cart if the quantity is zero
        return quantity === 0 ? null : { ...item, quantity };
      }
      return item;
    }).filter(Boolean); // Remove null entries from the array
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    return updatedCart;
  });
};
// Function to add an item to the cart
const addToCart = (product) => {
  let updatedCart;

  // Check if the product is already in the cart
  const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);

  if (existingItemIndex !== -1) {
    // If the item is already in the cart, update its quantity
    updatedCart = [...cartItems];
    updatedCart[existingItemIndex].quantity += 1;
  } else {
    // If the item is not in the cart, add it with quantity 1
    updatedCart = [...cartItems, { ...product, quantity: 1 }];
  }

  // Update the state with the modified cart
  setCartItems(updatedCart);

  // Save the updated cartItems to local storage
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};
useEffect(() => {
  console.log(cartItems);
}, [cartItems]); // Dependency array ensures logging only when cartItems changes
  return (
<Router>
  <div className="App">
    <Routes>
      {/* Default route, renders Section component when the path is '/' */}
      <Route
        path="/"
            element={<Section addToCart={addToCart} getTotalItems={getTotalItems } />}
      />
      {/* Route for the Cart page, renders Cart component with cartItems */}
      <Route
        path="/Cart"
            element={<Cart cartItems={cartItems} getItemQuantityInCart={getItemQuantityInCart} handleIncrement={updateCartItemQuantity} removeItemFromCart={removeItemFromCart } totalPrice={totalPrice} />}
      />
    </Routes>

    {/* Render Shoes component only when the path is not '/Cart' */}
  </div>
</Router>
  );
}

export default App;