import React from './sidebar.css'
import logo from './logo.png'
import dashboard from './dashboard.png'
import labratories from './labratories.png'
import transports from './transports.png'
import products from './products.png'
import {GrFormNext} from 'react-icons/gr'

function Sidebar() {
  return (
    <div className='sidebar_container'>
      <div className="sidebar_wrapper">
        <div className="logo_container">
        <img src={logo} alt=''/>
      </div>
      <div className="menu_container">
        <div className='menu_bar'>
          <img src={dashboard} alt=''/>
          <span>Dashboard</span>
        </div>
        <div className='menu_bar'>
          <img src={products} alt=''/>
          <span>Products</span>
          <GrFormNext className='rightarrow'/>
        </div>
        <div className='transport_container'>
          <div className='transport'>
            <img src={transports} alt=''/>
            <span>Transports</span>
            <GrFormNext className='downarrow'/>
          </div>
          <div className='proposals'><p>Proposals</p></div>
        </div>
        <div className='menu_bar'>
          <img src={labratories} alt=''/>
          <span>Labratories</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar