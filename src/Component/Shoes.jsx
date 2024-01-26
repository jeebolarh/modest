import React, { useState,useEffect } from 'react'
import shoess from "./Shoes/RED.png"
import street from "./Shoes/pexels-mnz-1598505-removebg-preview.png"
import vans from "./Shoes/pexels-web-donut-19090-removebg-preview.png"
import black from "./Shoes/photo-1543508282-6319a3e2621f-removebg-preview.png"
import brown from "./Shoes/photo-1549298916-b41d501d3772-removebg-preview.png"
import pink from "./Shoes/photo-1595950653106-6c9ebd614d3a-removebg-preview.png"
import brownish  from "./Shoes/photo-1603808033192-082d6919d3e1-removebg-preview.png"
import "./Shoes.css"
const Shoes = ({addToCart}) => {
  const shoes = [
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: shoess ,
      price: 340,
      text: "specialitem",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"
      
    },
    {
      name: "Nike Mountainers",
      size: 34,
      color: ["red", "blue", "black"],
      img:  street ,
      price: 230,
      text: "specialitem",
      description: "Nike Mountaineers, Hiking the modern way; Ash, Ultra rigged "
    },
    {
      name: "Vans 1984",
      size: 34,
      color: ["red", "blue", "black"],
      img: vans ,
      price: 306,
      text: "specialitem",
      description: "Vance 1984 for cozy get together events, Blue, Outdoor special"

    },
    {
      name: "Nike AirForce1",
      size: 34,
      color: ["red", "blue", "black"],
      img:  black,
      price: 465,
      text: "special item",
      description: "Nike AirForce 1s trendy for all ocassions, Black , Trending"
    },
    {
      name: "Nike AirForce10s",
      size: 34,
      color: ["red", "blue", "black"],
      img: brown ,
      price: 125,
      text: "specialitem",
      description: "Nike AirForce 1s trendy for all ocassions, Brown , Trending"

    },
    {
      name: "Nike Baby AirForce",
      size: 34,
      color: ["red", "blue", "black"],
      img:  pink,
      price: 507,
      text: "special item",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"

    },
    {
      name: "SYNXSTR 32",
      size: 34,
      color: ["red", "blue", "black"],
      img: brownish,
      price: 245,
      text: "special item",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"

    },
    {
      name: "Nike Galaxy2s",
      size: 34,
      color: ["red", "blue", "black"],
      img: shoess,
      price: 320,
      text: "specialitem",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"

    },
    {
      name: "Nike Galaxy",
      size: 34,
      color: ["red", "blue", "black"],
      img:  shoess,
      price: 650,
      text: "specialitem",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"
    }
]
const toggleButton = (shoeName) => {
  setShoeToggled((prevState) => ({ ...prevState, [shoeName]: !prevState[shoeName] }));
};
  const [shoeToggled, setShoeToggled] = useState({});
useEffect(() => {
  shoes.forEach((shoe) => {
    setShoeToggled((prevState) => ({ ...prevState, [shoe.name]: false }));
  });
}, []); // Empty dependency array to run only once

  const shoelist = shoes.map((shoe, key) => 
    <div className='shoe-content' key={key}>
      <div>
        <img className="image" src={shoe.img} alt="nike" style={{
          width: shoe.text === "special item" ? "200px" : "300px",
          height: shoe.text === "special item" ? "200px": "200px"
    }} />
      </div>
      <div className='shoe-bottom-text'>
        <h3>{shoe.name}</h3>
        <p className='description'>{shoe.description}</p>
        <p  className='p'>$ {shoe.price}</p>
        <div className='button-container'>
        <div onClick={() => toggleButton(shoe.name)}>
          {!shoeToggled[shoe.name] ? (
            <button className='sec-button button' onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
          ) : (
            <button className='button sec-button'>Added</button>
          )}
        </div>
        </div>
      </div>
     </div>
  )

  return (
    <div className='shoes-container'>
      <h2 className="shoe">Shoes</h2>  
      <div className="shoe-flex">
        <div className='shoe-wrapper'>
            {shoelist}
        </div>
      </div>
      </div>
  )
}

export default Shoes