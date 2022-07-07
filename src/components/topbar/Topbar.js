import './topbar.css'
import {BsBell} from 'react-icons/bs'
import {GrLogout} from 'react-icons/gr'
import profile from './profile.png'

function Topbar() {
  return (
    <div className='Topbar_Container'>
      <div className="left_header">
        <small>Transports</small>
        <small> / </small>
        <small>Proposals</small>
      </div>
      <div className="right_icon_container">
        <span><BsBell/> <small className="red_dot"></small> </span>
        <img src={profile} alt =''/>
        <span><GrLogout/></span>
      </div>
    </div>
  )
}

export default Topbar