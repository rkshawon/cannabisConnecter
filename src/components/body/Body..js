import './body.css'
import p1 from './profile1.png'
import p3 from './profile3.png'
import p2 from './profile2.png'
import rating from './rating.png'
import lastrating from './ratinglast.png'
import downarrow from './downarrow.png'
import uparrow from './uparrow.png'
import right from './right.png'
import percenticon from './percenticon.png'
import completeproject from './completeproject.png'
import car from './car.png'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'

function Body() {
  return (
    <div className='body_container '>
        <div className="body_box1">
          <span>Sort By</span>
          <select name="pets" id="pet-select" className='arrow_icon'>
            <option value="">Top Rated</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div className="body_box2">
          <div className="top">
            <div className="top1">
              <img src={p1} alt=''/>
              <div className="left_side">
                <span>Patrick Leach</span>
                <small>Erick, Oklahoma</small>
              </div>
            </div>
            <div className="top2">
              <span>Toyota CHR</span>
              <span>2018, GA-LXM</span>
            </div>
            <div className="top3">
              <small>Overall Rating</small>
              <span>4.9</span>
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
              <span>$260.00</span>
            </div>
            <div className="top5">
              <button>Accept</button>
              <button>Decline</button>
              <small>Mark Shortlist</small>
            </div>
          </div>
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
            <img src={uparrow} alt=''/>
          </div>
        </div>
      </div>
        <div className="body_box3">
            <div className="sub_box">
            <div className="top">
            <div className="top1">
              <img src={p1} alt=''/>
              <div className="left_side">
                <span>Ken Miles</span>
                <small>Erick, Oklahoma</small>
              </div>
            </div>
            <div className="top2">
              <span>Sony XL</span>
              <span>2012, B6-G35</span>
            </div>
            <div className="top3">
              <small>Overall Rating</small>
              <span>4.9</span>
              <div className='rating_container'>
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={lastrating} alt ='' />
              </div>
              <img src={downarrow} alt=''/>
            </div>
            <div className="top3">
              <small>Bid Amount</small>
              <span>$265.00</span>
            </div>
            <div className="top5">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
            </div>
            <div className="sub_box">
            <div className="top">
            <div className="top1">
              <img src={p2} alt=''/>
              <div className="left_side">
                <span>Henry Ford</span>
                <small>Tulsa, Oklahoma</small>
              </div>
            </div>
            <div className="top2">
              <span>Ford Truck</span>
              <span>2012, B6-G35</span>
            </div>
            <div className="top3">
              <small>Overall Rating</small>
              <span>4.8</span>
              <div className='rating_container'>
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={lastrating} alt ='' />
              </div>
              <img src={downarrow} alt=''/>
            </div>
            <div className="top3">
              <small>Bid Amount</small>
              <span>$255.00</span>
            </div>
            <div className="top5">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
            </div>
            <div className="sub_box">
            <div className="top">
            <div className="top1">
              <img src={p3} alt=''/>
              <div className="left_side">
                <span>Ken Miles </span>
                <small>Erick, Oklahoma</small>
              </div>
            </div>
            <div className="top2">
              <span>Tata GLS</span>
              <span>2012, B6-G35</span>
            </div>
            <div className="top3">
              <small>Overall Rating</small>
              <span>4.8</span>
              <div className='rating_container'>
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={rating} alt ='' />
              <img src={lastrating} alt ='' />
              </div>
              <img src={downarrow} alt=''/>
            </div>
            <div className="top3">
              <small>Bid Amount</small>
              <span>$245.00</span>
            </div>
            <div className="top5">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
            </div>
            <div className="sub_box">
            <div className="top">
            <div className="top1">
              <img src={p1} alt=''/>
              <div className="left_side">
                <span>Ken Miles</span>
                <small>Tulsa, Oklahoma</small>
              </div>
            </div>
            <div className="top2">
              <span>Sony XL</span>
              <span>2012, B6-G35</span>
            </div>
            <div className="top3">
              <small>Overall Rating</small>
              <span>4.9</span>
              <div className='rating_container'>
                <img src={rating} alt ='' />
                <img src={rating} alt ='' />
                <img src={rating} alt ='' />
                <img src={rating} alt ='' />
                <img src={lastrating} alt ='' />
              </div>
              <img src={downarrow} alt=''/>
            </div>
            <div className="top3">
              <small>Bid Amount</small>
              <span>$265.00</span>
            </div>
            <div className="top5">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
            </div>
        </div>
        <div className="body_box4">
          <button><GrFormPrevious  className='leftarrow'/></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button><GrFormNext/></button>
        </div>
    </div>
  )
}

export default Body