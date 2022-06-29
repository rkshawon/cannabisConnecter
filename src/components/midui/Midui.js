import './midui.css'
import slider_circle from './slider_thumb.png'

function Midui() {
  return (
    <div className='midui_container'>
      <div className="first_midui_box">
        <span>Proposal Status</span>
        <p>Select your proposal as their current status</p>
          <div className='radio_button_container'>
            <div className="radio_overlay">Active</div>
            <div className="radio_overlay">Pending</div>
            <div className="radio_overlay">Archive</div>
          </div>
      </div>
      <div className="first_midui_box">
      <span>Price Filter</span>
      <p>Select the proposals as their price range</p>
        <div className='slider_container'>
          <div className="silder_value">
            <p>$200</p>
            <p>$500</p>
          </div>
          <div className='slider'>
            <div className='slider2'>
              <div className='slider_left'><img src={slider_circle} alt=''/></div>
              <div className='slider_right'><img src={slider_circle} alt=''/></div>
          </div>
          </div>
        </div>
      </div>
      <div className="first_midui_box">
      <span>Vehicle Category</span>
      <p>Filter the vehicle category of current proposal</p>
        <div className='radio_button_container2'>
          <div className="radio_overlay">Truck</div>
          <div className="radio_overlay">Van</div>
          <div className="radio_overlay">SUV</div>
        </div>
      </div>
      <button className='midui_button'>Apply Filters</button>
    </div>
  )
}

export default Midui