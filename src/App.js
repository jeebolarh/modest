import shoess from "./Component/Shoes/RED.png"
import Navbar from "./Component/Navbar";
import Section from "./Component/Section"
function App() {
  const shoes = [
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: require("./Component/Shoes/RED.png").default
    }]
  const shoeList = shoes.map((shoe, key) => 
    <img key={key} src={shoe.img} alt=""/>
  )
  return (
    <div className="App">
      <Navbar />
      <Section/>
    </div>
  );
}

export default App;
