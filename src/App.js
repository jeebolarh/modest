import Navbar from "./Component/Navbar";
import Section from "./Component/Section"
import Shoes from "./Component/Shoes";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems)
  };
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Shoes addToCart={addToCart} />
    </div>
  );
}

export default App;
