
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { ContextProvider } from '../context/Context'
import { Home } from '../pages/Home'
import { Blog } from '../pages/Blog'
import { BlogPost } from '../pages/BlogPost'

const Rotas = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </ContextProvider>
    </Router>
  )
}

export default Rotas
