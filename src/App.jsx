import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Alta from './pages/Alta'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import NoEncontrado from './pages/NoEncontrado'

const App = () => {
  return (
   < BrowserRouter>
   
    <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />

    </Routes>
   
   </BrowserRouter>
  )
}

export default App