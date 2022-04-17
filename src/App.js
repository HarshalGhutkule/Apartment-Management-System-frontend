
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home';
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
