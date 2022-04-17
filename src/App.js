
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Navbar } from './Component/Navbar';
import { Register } from './Component/Register';
import { ResidentDetail } from './Component/ResidentDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resident-detail' element={<ResidentDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
