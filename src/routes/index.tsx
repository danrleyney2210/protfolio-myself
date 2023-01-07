
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { ContextProvider } from '../context/Context'
import { Home } from '../pages/Home'

const Rotas = () => {
  return (
    <Router>
      <ContextProvider>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </Router>
  )
}

export default Rotas
