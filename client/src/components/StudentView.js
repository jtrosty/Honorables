import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Messages from './Messages'
import GoogleMap from './GoogleMap'
import LessonWindow from './LessonWindow'
import Profile from './Profile'

function StudentView() {
  const access = 'Student'
  return (
    <div class='container'>
      <div class='row'>
        <Navbar access={access} />
        <Profile />
      </div>
      <div class='row'>
        <div class='col-6'>
          <LessonWindow />
        </div>
        <div class='container col-6'>
          <GoogleMap />
        </div>
      </div>
      <div class='row-1'>The bottom</div>
    </div>
  )
}

export default StudentView
