import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Assignment from './Assignment'
import StudentLessonWindow from './StudentLessonWindow'

export default function StudentLesson({ setMapCoordinates }) {
  const [assignments, setAssignments] = useState(null) // Sets the assignments the students will choose from (Drop down menu of assignments)
  const [currentAssignment, setCurrentAssignment] = useState('') // The value of the assignment after user selects

  const [answers, setAnswers] = useState([])

  React.useEffect(() => {
    if (assignments == null) {
      fetch('http://localhost:5000/getAssNums')
        .then((res) => res.json())
        .then((assignments) => setAssignments(assignments))
    }
    //console.log(assignments)
  }, [currentAssignment])

  function handleAssignmentChange(event) {
    setCurrentAssignment(event.target.value)
  }

  return (
    <div>
      <a>Select Assignment</a>
      <select value={currentAssignment} onChange={handleAssignmentChange}>
        <option>1</option>
        <option>7</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <div>
        {currentAssignment ? (
          <div>
            <StudentLessonWindow setMapCoordinates={setMapCoordinates} />
            <Assignment assignment={currentAssignment} />
          </div>
        ) : (
          'Waiting for Selection...'
        )}
      </div>
    </div>
  )
}

/*
{!assignments ? (
          <option>Fetching Assignments...</option>
        ) : (
          assignments.map((x, y) => <option key={y}>{x}</option>)
        )}
*/
