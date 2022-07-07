import './App.css';
import { Layout } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Maincontent from './components/mainContent/Maincontent';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Sider width = "20%" style={{backgroundColor:"white", }}> <Sidebar/> </Sider>
      <Layout>
        <Header style={{backgroundColor:"white"}}> <Topbar/> </Header>
        <Content> <Maincontent/> </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
