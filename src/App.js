import React from 'react'
import './App.css'
// 'Routes' was previously 'Switch'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

// Component imports
import Home from './components/Home'
import StudentView from './components/StudentView'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Lesson' exact element={<StudentView />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
/*
<GoogleMap />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/Messages' exact element={Messages} />
        </Routes>
      </Router>
*/
