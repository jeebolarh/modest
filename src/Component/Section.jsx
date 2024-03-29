import "./Section.css"
import backround1 from "./bg/photo-1508427953056-b00b8d78ebf5-removebg-preview.png"
import Navbar from "./Navbar"
import Shoes from "./Shoes"
import { useSpring } from "react-spring"
import Headphones from "./Headphones"
import Footer from "./Footer"
const Section = ({ addToCart, getTotalItems }) => {
 const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 3000 },
 });
  const scrollToBottom =()=>{
 // Get the element at the bottom of the page
      const bottomElement = document.getElementById('bottomElement');

      // Scroll to the bottom element with smooth scroll
      bottomElement.scrollIntoView({ behavior: 'smooth' });  }
  return (
    <div>
      <Navbar getTotalItems={getTotalItems} />
      <div className='sec-container'>
        <div className="section-flex">
          <div className="sec-text text-visible">
            <h2 style={props} className="sec-header">Welcome to CHEAPIFY</h2>
            <p className="sec-mini">Your one stop shop to everything fashion</p>
            <button className="sec-button" onClick={scrollToBottom}>Shop now</button>
          </div>
          <div className="section-img">
            <img src={backround1} alt="" />
          </div>
        </div>
        <div className="line"></div>
      </div>
      <Shoes addToCart={addToCart} />
      <Headphones addToCart={addToCart} />
      <div id="bottomElement"></div>
            <Footer/>

    </div>
  )
}
export default Section