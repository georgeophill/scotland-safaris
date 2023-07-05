import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Guides from './pages/guides/Guides'
import Safari from './pages/safaris/Safaris'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Gallery />
        <Guides />
        <Safari />
        <NotFound />
      </BrowserRouter>
  )
}

export default App