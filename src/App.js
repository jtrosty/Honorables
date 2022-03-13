import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component imports
import Home from './components/Home'
import GoogleMap from './components/GoogleMap'
import Navbar from './components/Navbar'
import Messages from './components/Messages'

function App() {
  return (
    <div className='container'>
      <GoogleMap />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact elemetn={Home} />
          <Route path='/Messages' exact element={Messages} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
