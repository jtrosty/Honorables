import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Component imports
import Home from './components/Home'
import Map from './components/Map'
import Navbar from './components/Navbar'
import Messages from './components/Messages'

function App() {
  return (
    <div className="container">
      <Map />
      <Router> 
        <Navbar/>
        <Switch>
          <Route path='/' exact elemetn={Home} />
          <Route path='/Messages' exact element={Messages} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
