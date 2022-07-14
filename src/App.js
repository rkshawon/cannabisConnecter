import './App.less';
import { Layout } from 'antd';
import Sidebar from './components/sidebar/Sidebar';
import Headers from './components/header/Headers';
import AddNewItems from './components/pages/addNewItems/AddNewItems';
const { Header, Sider, Content } = Layout;


function App() {

  return (
    <div className="App">
      <Layout className='layout'>
        <Sider className='sider'>
          <Sidebar/>
        </Sider>
        <Layout>
          <Header className='header'>
            <Headers/>
          </Header>
          <Content className='content'>
            <AddNewItems/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
