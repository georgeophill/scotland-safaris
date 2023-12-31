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
import Footer from './components/Footer'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/safaris" element={<Safari />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App