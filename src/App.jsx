import './App.css'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
