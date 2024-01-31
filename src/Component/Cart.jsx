// src/Cart.js
import React from 'react';
import "./Cart.css"

const Cart = ({ cartItems, getItemQuantityInCart, handleIncrement, removeItemFromCart }) => {  
  return (
    <div className='shopping-cart-container'>
      <h2>Shopping Cart</h2>
              <div className="item-container">

      {cartItems.map((item, index) => (
        <div key={index} className='item-wrapper'>
           <div className="shopping-items">
              <div>
                <img src={item.img} />
                <div className="cart-text">
                  <h2>{item.name}</h2> 
                <p>{item.description}</p>
                <div className='control'>
                  <div className='cart-svg svg1' onClick={() => handleIncrement(item.name, item.quantity + 1)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></div>
                  <p>{getItemQuantityInCart(item.name)}</p>
                   <div className='cart-svg svg2' onClick={() => handleIncrement(item.name, item.quantity - 1)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-440v-80h560v80H200Z"/></svg></div>
                </div>
                </div>
              </div>
          </div>
             <div className='left-text'>
            <button className='remove' onClick={()=>{removeItemFromCart(item.name)}}>remove from cart</button>
            <p className='price'>$ {item.price * item.quantity}</p>
            </div>
          </div>  
      ))}
     </div>
    </div>
  );
};

export default Cart;
