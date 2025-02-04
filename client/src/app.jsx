import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoApp from './pages/ToDoList.jsx'
import PaginaInicial from './pages/PaginaInicial.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<PaginaInicial/>} exact/>
        <Route path='/ToDoList' element={<ToDoApp/>} exact />
    </Routes>
    </BrowserRouter>
  )
}

export default App