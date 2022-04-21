import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Messages from './Messages'
import GoogleMap from './GoogleMap'
import StudentLesson from './StudentLesson'

function StudentView() {
  const [mapCoordinates, setMapCoordinates] = React.useState([])

  React.useEffect(() => {
    setMapCoordinates(mapCoordinates)
  }, [mapCoordinates])

  const access = 'Student'
  return (
    <div className='container'>
      <div className='row'>
        <Navbar access={access} />
      </div>
      <div className='row'>
        <div className='col-6'>
          <StudentLesson setMapCoordinates={setMapCoordinates} />
        </div>
        <div className='container col-6'>
          <GoogleMap mapCoordinates={mapCoordinates} />
        </div>
      </div>
      <div className='row-1'></div>
    </div>
  )
}

export default StudentView
