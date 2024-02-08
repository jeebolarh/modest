// src/Cart.js
import React from 'react';
import "./Cart.css"
import Footer from './Footer';

const Cart = ({ cartItems, getItemQuantityInCart, handleIncrement, removeItemFromCart, totalPrice }) => { 
 
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
                <p className='item-description'>{item.description}</p>
                <div className='control'>
                  <div className='cart-svg svg1' onClick={() => handleIncrement(item.name, item.quantity + 1)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></div>
                  <p>{getItemQuantityInCart(item.name)}</p>
                   <div className='cart-svg svg2' onClick={() => handleIncrement(item.name, item.quantity - 1)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-440v-80h560v80H200Z"/></svg></div>
                </div>
                </div>
              </div>
          </div>
             <div className='left-text'>
            <button className='remove' onClick={()=>{removeItemFromCart(item.name)}}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill='#2d2d2d'/></svg></button>
            <p className='price'>$ {item.price * item.quantity}</p>
            </div>
          </div>  
      ))}
      </div>
      <div className="total-display">
        <h3 >Cart Summary</h3>
        <h3 className='sub'>Sub Total:  ${totalPrice}</h3>
        <button className='checkout'>CHECKOUT (${totalPrice})</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
