import './header.css'
import {BsBell} from 'react-icons/bs'
import {GrLogout} from 'react-icons/gr'
import profile from './profile.png'


function Header() {
  return (
    <div className = 'header_container' >
        <div className="left_header">
            <small>Transports</small>
            <small> / </small>
            <small>Proposals</small>
        </div>
        <div className="right_header">
            <div className='right_icon_container'>
                <span><BsBell/> <small className="red_dot"></small> </span>
                <img src={profile} alt =''/>
                <span><GrLogout/></span>
            </div>
        </div>
    </div>
  )
}

export default Header