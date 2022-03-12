import React from 'react'

// Component imports
import Map from './components/Map'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'

function App() {
  return (
    <div className="container">
      <div> 
        <Map />
      </div>
      <Navbar />
      <Login />
    </div>
  )
}

export default App
