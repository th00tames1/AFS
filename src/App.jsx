import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Research from './components/pages/Research'
import Team from './components/pages/Team'
import Publications from './components/pages/Publications'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

