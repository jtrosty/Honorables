import React from 'react'
import './App.css'
// 'Routes' was previously 'Switch'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

// Component imports
import Home from './components/Home'
import StudentView from './components/StudentView'
import ErrorPage from './components/ErrorPage'
import TeacherView from './components/TeacherView'
import Messages from './components/Messages'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Lesson' exact element={<StudentView />} />
        <Route path='/TeacherView' exact element={<TeacherView />} />
        <Route path='/Messages' exact element={<Messages />} />
        <Route path='/RegisterForm' exact element={<RegisterForm />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;
