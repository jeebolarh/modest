import React from 'react'
import shoess from "./Shoes/RED.png"
import "./Shoes.css"
const Shoes = ({addToCart}) => {
  const shoes = [
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },
    {
      name: "Nike Emporium",
      size: 34,
      color: ["red", "blue", "black"],
      img: {shoess}
    },

]

  const shoelist = shoes.map((shoe, key) => 
    <div className='shoe-content' key={key}>
      <div>
        <img className="image" src={shoess} alt="nike" />
      </div>
      <div className='shoe-bottom-text'>
        <h2>{shoe.name}</h2>
        <p>{shoe.size}</p>
        <button className='sec-button button' onClick={() => {addToCart(shoe)}}>Add to Cart</button>
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