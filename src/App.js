import './App.css';
import Body from './components/body/Body.';
import Header from './components/header/Header';
import Midui from './components/midui/Midui';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <div className="body">
        <Midui/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
