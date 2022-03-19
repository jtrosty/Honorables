import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Messages from './Messages'
import GoogleMap from './GoogleMap'

function StudentView() {
  return (
    <div class="container">
      <div class = "row">
        <div class="col-3"> 
          <Navbar />
        </div>
        <div class="col-6"> 
          <GoogleMap />
        </div>

      </div>
    </div>
  )
}

export default StudentView
