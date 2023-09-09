import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Todo from './Components/Todo';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/todo' element={<Todo/>} />    
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
