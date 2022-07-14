import './sidebar.css';
import { SettingOutlined } from '@ant-design/icons';
import {MdOutlineSpaceDashboard, MdOutlineLocalShipping} from 'react-icons/md';
import {BiBox, BiNotepad} from 'react-icons/bi';
import {RiAuctionLine} from 'react-icons/ri';
import {ImLab} from 'react-icons/im';
import {GrTransaction} from 'react-icons/gr';
import { Menu } from 'antd';
import React, { useState } from 'react';
import logo from './logo.png'

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
    getItem('Dashboard', 'sub1', <MdOutlineSpaceDashboard />),
    getItem('Products', 'sub2', <BiBox />, [
      getItem('Product List', '9'),
      getItem('Add New Itema', '10'),
    ]),
    getItem('Auction', 'sub3', <RiAuctionLine />, [
      getItem('Auction 1', '11'),
      getItem('Auction 2', '12'),
    ]),
    getItem('Orders', 'sub4', <BiNotepad />),
    getItem('Transports', 'sub5', <MdOutlineLocalShipping />, [
      getItem('Proposal list', '13'),
      getItem('Create Proposal', '14'),
    ]),
    getItem('Labratories', 'sub6', <ImLab />),
    getItem('Transaction', 'sub7', <GrTransaction />),
    getItem('Settings', 'sub8', <SettingOutlined />),
  ]; 
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function Sidebar() {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
  
  return (
    <div className='sidebar_container'>
        <div className="logo_container">
            <img src={logo}  alt=''/>
        </div>
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                marginTop: '20px',
                width: 200,
                fontSize: '12px'
            }}
            items={items}
        />
    </div>
  )
}

export default Sidebar