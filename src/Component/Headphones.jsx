import React from 'react'
import ultra from './Headphones/ultraboom.png'
import kle from "./Headphones/kle.png"
import abc from "./Headphones/abc.png"
import fire from "./Headphones/fire.png"
import water from "./Headphones/water.png"
import synstr from "./Headphones/synstr.png"
import "./Headphones.css"
import { useState, useEffect } from 'react'
const Headphones = ({addToCart}) => {
const toggleButton = (shoeName) => {
  setShoeToggled((prevState) => ({ ...prevState, [shoeName]: !prevState[shoeName] }));
};
  const [shoeToggled, setShoeToggled] = useState({});
  const [animationPaused, setAnimationPaused] = useState(false);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            setAnimationPaused(true);

            scrollTimeout = setTimeout(() => {
                setAnimationPaused(false);
            }, 500); // Adjust the delay according to your preference
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const headphones =[
    {
      name: "Ultra Boom 31",
      color: ["red", "blue", "black"],
      img: ultra ,
      price: 200,
      text: "specialitem",
      description: "Ultra booming sound for better sounding and higher quality music"
      
    },
    {
      name: "SONIC Edger",
      color: ["red", "blue", "black"],
      img:  abc ,
      price: 105,
      text: "specialitem",
      description: "Sounds have never been clearer until sonic edger"
    },
    {
      name: "KLE",
      color: ["red", "blue", "black"],
      img: kle ,
      price: 306,
      text: "specialitem",
      description: "Loud noises no more, drown out the noise and get quality sounds with the futuristic KLE"

    },
    {
      name: "SYNXSTR SET",
      color: ["red", "blue", "black"],
      img:  synstr,
      price: 465,
      text: "special item",
      description: "The ultimate sound system for your ears, get all your sounds at the comfort of your ears "
    },
    {
      name:"SYNXSTR SET10s",
      color: ["red", "blue", "black"],
      img: fire ,
      price: 125,
      text: "specialitem",
      description: "Refiend sound system for your ears, get the best sound quality from your headset"

    },
    {
      name: "JETROs XR15",
      color: ["red", "blue", "black"],
      img:  water,
      price: 507,
      text: "special item",
      description: "Nike Emporium 10s for outdoor sporting events, Red , Super-comfy"

    }
  ]

  const headphonesList = headphones.map((headphone, key) => 
    <div className='headphone-content' key={key}>
      <div><img className="headphone-image" src={headphone.img} alt="" />
      </div>
      <div className='headphone-bottom-text'>
        <h3>{headphone.name}</h3>
        <p className='description'>{headphone.description}</p>
        <p  className='p'>$ {headphone.price}</p>
        <div className='button-container'>
        <div onClick={() => toggleButton(headphone.name)}>
          {!shoeToggled[headphone.name] ? (
            <button className='sec-button button' onClick={() => addToCart(headphone)}>
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
      <h2 className="headphones">Headphones</h2>  
      <div className={`headphone-flex ${animationPaused ? 'paused' : ''}`}>
        <div className='headphone-wrapper' style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}>
            {headphonesList}
        </div>
      </div>
      </div>
  )
}

export default Headphones