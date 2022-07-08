import './profile.css'
import rating from './rating.png'
import lastrating from './ratinglast.png'
import right from './right.png'
import percenticon from './percenticon.png'
import completeproject from './completeproject.png'
import car from './car.png'
import { DownOutlined , UpOutlined} from '@ant-design/icons'
import { useState } from 'react'


function Profile({profile, name, address, model, modela, rate, amount}) {
    const [isOpen, setisOpen] = useState(false)

    const collaps = ()=>{
        setisOpen(isOpen => !isOpen)
    }

  return (
    <div className="body_box2">
    <div className="top">
      <div className="top1">
        <img src={profile} alt=''/>
        <div className="left_side">
          <span>{name}</span>
          <small>{address}</small>
        </div>
      </div>
      <div className="top2">
        <span>{model}</span>
        <span>{modela}</span>
      </div>
      <div className="top3">
        <small>Overall Rating</small>
        <span>{rate}</span>
        <div className='rating_container'>
        <img src={rating} alt ='' />
        <img src={rating} alt ='' />
        <img src={rating} alt ='' />
        <img src={rating} alt ='' />
        <img src={lastrating} alt ='' />
        </div>
      </div>
      <div className="top3">
        <small>Bid Amount</small>
        <span>${amount}</span>
      </div>
      <div className="top5">
        <button>Accept</button>
        <button>Decline</button>
        <small className={!isOpen ? "visi":'' }>Mark Shortlist</small>
      </div>
    </div>
    { isOpen &&
    <div className="bottom">
        <div className="header">
            <span>Summery</span>
            <span>Feadback</span>
        </div>
        <div className="footer">
            <div className="footer-left">
                <div>
                    <img src={right} alt=''/>
                    <p>Good response time</p>
                </div>
                <div>
                    <img src={right} alt=''/>
                    <p>Experience driver</p>
                </div>
                <div>
                    <img src={right} alt=''/>
                    <p>Top Rated in plateform</p>
                </div>
            </div>
            <div className="footer-left">
                <div>
                    <img src={percenticon} alt=''/>
                    <p>100 % job Success Rate</p>
                </div>
                <div>
                    <img src={car} alt=''/>
                    <p>13,000/KM Experience</p>
                </div>
                <div>
                    <img src={completeproject} alt=''/>
                    <p>11 Project Completed</p>
                </div>
            </div>
        </div>
    </div>
    }
    <div className="collaps_button" onClick={collaps}>
        { !isOpen? <DownOutlined className='collaps_icon' /> : <UpOutlined className='collaps_icon'/>}
    </div>
</div>
  )
}

export default Profile