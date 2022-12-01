import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Listar from './components/Listar';
import Actualizacion from './components/Actualizacion';
import Creacion from './components/Creacion';
import NoPage from './components/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/Main" element={<Main />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Listar" element={<Listar />} />
          <Route path="/Creacion" element={<Creacion />} />
          <Route path="/Actualizacion" element={<Actualizacion />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;