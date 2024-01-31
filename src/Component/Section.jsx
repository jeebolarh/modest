import "./Section.css"
import backround1 from "./bg/photo-1508427953056-b00b8d78ebf5-removebg-preview.png"
import Navbar from "./Navbar"
import Shoes from "./Shoes"
import { useSpring } from "react-spring"
const Section = ({ addToCart }) => {
 const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 3000 },
  });
  return (
    <div>
      <Navbar />
      <div className='sec-container'>
        <div className="section-flex">
          <div className="sec-text">
            <h2 style={props} className="sec-header">Welcome to CHEAPIFY</h2>
            <p className="sec-mini">Your one stop shop to everything fashion</p>
            <button className="sec-button">Shop now</button>
          </div>
          <div className="section-img">
            <img src={backround1} alt="" />
          </div>
        </div>
        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#818181" fill-opacity="1" d="M0,256L1440,96L1440,320L0,320Z"></path></svg>
        </div>
      </div>
      <Shoes addToCart={addToCart}/>
    </div>
  )
}
export default Section