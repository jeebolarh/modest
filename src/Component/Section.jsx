import "./Section.css"
import backround1 from "./bg/photo-1508427953056-b00b8d78ebf5-removebg-preview.png"
const Section = () => {
  return (
    <div className='sec-container'>
      <div className="section-flex">
        <div className="sec-text">
          <h2 className="sec-header">Welcome to CHEAPIFY</h2>
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
  )
}
export default Section