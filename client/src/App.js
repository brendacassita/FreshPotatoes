import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';

function App() {
  return (
    <div>
      <h1>Starter App</h1>
      <Navbar />
      <>
       <Routes>
         <Route path='/' element={<Home />}/> -
         <Route path='/login' element={<Login />}/> - 
         <Route path='/register' element={<Register />}/> -
         <Route path='*' element={<NoMatch />}/> -
       </Routes>
      </>
    </div>
  );
}

export default App;
