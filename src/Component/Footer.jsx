import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div  className="footer-text">
        <h2>CHEAPIFY</h2>
        <p>Get your day to day needs at very cheap and affordable prices, prevent the hassle, shop quality goods at affordable prices at CHEAPIFY</p>
      </div>
      <div className='contact'>
        <h2>Contact</h2>
        <ul>
          <li>Jeebolarh@gmail.com</li>
          <li>+234-905-559-2587</li>
          <li>Address - Lagos, Nigeria</li>
        </ul>
      </div>
      <div>
        <h2>JIBOLA</h2>
        <p className='disclaimer'>This site exclusively belongs to  &copy; Abiola Ajibola, Do not clone, Desinged by Ajibola Abiola</p>
      </div>
    </div>
  )
}

export default Footer