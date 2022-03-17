import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Messages from './Messages'
import GoogleMap from './GoogleMap'

function StudentView() {
  return (
    <div>
      <GoogleMap />

      <Navbar />
    </div>
  )
}

export default StudentView
