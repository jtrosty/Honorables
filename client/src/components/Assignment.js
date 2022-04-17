import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Assignment(props) {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/getWikiData', {
        params: { assNum: props.assignment },
      })
      .then((response) => setQuestions(response.data))
  }, [props.assignment])
  console.log(questions)
  return (
    <div>
      <div>
        {questions.map((question, index) => {
          return (
            <div>
              <p></p>
              <p>Question Number: {index + 1} </p>
              <p>Question: {question.teacherQuestion}</p>
              <input placeholder='Answer Here'></input>
              <button>Submit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
