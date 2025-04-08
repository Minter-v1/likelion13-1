import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/login'; 
import Signup from './component/signup'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;