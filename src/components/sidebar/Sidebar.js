import './sidebar.css'
import logo from './logo.png'
import Transport from './shipping.png'
import { MdOutlineSpaceDashboard} from 'react-icons/md'
import {ImLab} from 'react-icons/im'
import {BiBox} from 'react-icons/bi'

import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', 'sub1', <MdOutlineSpaceDashboard style={{fontSize: "24px", color:"black"}}/>),
  getItem('Products', 'sub2', <BiBox style={{fontSize: "24px", color:"black"}}/>, [
    getItem('Products 1', '1'),
    getItem('Products 2', '2'),
  ]),
  getItem('Transports', 'sub3', <img src={Transport} alt='' style={{height: "26px",width:'26px', color:"black"}}/>, [
    getItem('Proposals', '3'),
  ]),
  getItem('Labratories', 'sub4', <ImLab style={{fontSize: "24px", color:"black"}}/>),
];

function Sidebar() {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
      <div className="sidebar_wrapper">
        <div className="logo_container">
          <img src={logo} alt=''/>
        </div>
        <div className="menu_container">
          <Menu className='menu_down'
          onClick={onClick}
          
          defaultSelectedKeys={["3"]}
          defaultOpenKeys={['sub3']}
          mode="inline"
          items={items}/>
        </div>
      </div>
  )
}

export default Sidebar