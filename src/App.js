
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { EditResidentDetail } from './Component/EditResidentDetail';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Navbar } from './Component/Navbar';
import { Register } from './Component/Register';
import { ResidentDetail } from './Component/ResidentDetail';
import { ResidentInfo } from './Component/ResidentInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resident-detail' element={<ResidentDetail/>}/>
        <Route path='/edit-resident-detail/:id' element={<EditResidentDetail/>}/>
        <Route path='/resident-info/:flatNumber' element={<ResidentInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
