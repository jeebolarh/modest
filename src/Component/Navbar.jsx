import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useState} from 'react'
const Navbar = ({ getTotalItems }) => {
                   
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleBtnOn = () => {
       setSidebarVisible(prevState => !prevState);
  }
  const toggleBtnOff = () => {
           setSidebarVisible(false);
  }
  
  return (
    <div className='container'>
      <nav className="navbar">
        <div className="logo">CHEAPIFY</div>
        <div className='links'>                   
          <ul className={sidebarVisible ? 'hidden' : 'visible'}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
              <ul>
                  <li className='nav-link'><a href="#">Home</a></li>
                  <li className='nav-link'><a href="#">Products</a></li>
                  <li className='nav-link'><a href="#">Categories</a></li>
                  <li className='input nav-link'><div class="messageBox"> 
              <input required="" placeholder="Search..." type="text" id="messageInput" /> 
              <button id="sendButton">        
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>       
              </button>
            </div>
            </li>
            <li className="display"><input hidden="" className="check-icon menu" id="check-icon" name="check-icon" type="checkbox"/>
            <label className="icon-menu menu" for="check-icon"onClick={toggleBtnOn}>
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
            </label></li>
          </ul>
        </div>
        <div className="cart">
          <Link to="/Cart">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm160-640h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Zm200 200q17 0 28.5-11.5T640-560v-80h-80v80q0 17 11.5 28.5T600-520Zm-240 0q17 0 28.5-11.5T400-560v-80h-80v80q0 17 11.5 28.5T360-520Z" fill="#2d2d2d" /></svg>
          </Link>
        </div>
        <div className="circle">{ getTotalItems()}</div>
      </nav>
    </div>
  )
}

export default Navbar