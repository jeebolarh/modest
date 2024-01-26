import Navbar from "./Component/Navbar";
import Section from "./Component/Section"
import Shoes from "./Component/Shoes";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
  console.log(cartItems);
}, [cartItems]); // Dependency array ensures logging only when cartItems changes

  return (
    <div className="App">
      <Navbar />
      <Section />
      <Shoes addToCart={addToCart} />
    </div>
  );
}

export default App;
