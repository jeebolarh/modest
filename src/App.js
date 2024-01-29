import Navbar from "./Component/Navbar";
import Section from "./Component/Section"
import Shoes from "./Component/Shoes";
import Cart from "./Component/Cart"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
   // Function to add an item to the cart
  const addToCart = (product) => {
    // Update the cartItems state
    const updatedCart = [...cartItems, product];
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
    {/* Navbar component */}
    {window.location.pathname !== '/Cart' && <Navbar />}
    
    {/* Routes for different pages */}
    <Routes>
      {/* Default route, renders Section component when the path is '/' */}
      <Route
        path="/"
        element={<Section />}
      />
      {/* Route for the Cart page, renders Cart component with cartItems */}
      <Route
        path="/Cart"
        element={<Cart cartItems={cartItems} />}
      />
    </Routes>

    {/* Render Shoes component only when the path is not '/Cart' */}
    {window.location.pathname !== '/Cart' && <Shoes addToCart={addToCart} />}
  </div>
</Router>
  );
}

export default App;
