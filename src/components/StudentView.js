import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Messages from './Messages'
import GoogleMap from './GoogleMap'
import LessonWindow from './LessonWindow'

function StudentView() {
  return (
    <div class="container">
      <div class="row-1">
          <Navbar />
      </div>
      <div class = "row">
        <div class="col-3"> 
          <LessonWindow />
        </div>
        <div class="col-6"> 
          <GoogleMap />
        </div>

      </div>
    </div>
  )
}

export default StudentView
