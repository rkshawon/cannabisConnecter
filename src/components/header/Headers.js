import './headers.less'
import {BsBell} from 'react-icons/bs'
import {GrLogout} from 'react-icons/gr'
import {AiOutlineMessage} from 'react-icons/ai'
import profile from './profile.png'

function Headers() {
  return (
    <div className='Topbar_Container'>
      <div className="left_header">
        <span>Transports</span>
        <span> / </span>
        <span>Proposals</span>
      </div>
      <div className="right_icon_container">
        <span><BsBell/> <small className="red_dot"></small> </span>
        <span><AiOutlineMessage/></span>
        <img src={profile} alt =''/>
        <span><GrLogout/></span>
      </div>
    </div>
  )
}

export default Headers