import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Assignment(props) {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [grade, setGrade] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/getWikiData', {
        params: { assNum: props.assignment },
      })
      .then((response) => setQuestions(response.data))
  }, [props.assignment])
  console.log(questions)

  function handleAnswer(event) {
    setAnswers(...answers, event.target.value)
  }

  function rightOrWrong(studentAnswer, teacherAnswer) {
    if (studentAnswer.toLowerCase() === teacherAnswer.toLowerCase()) {
      setGrade(...grade, 1)
      return <a>Correct!</a>
    } else {
      setGrade(...grade, 0)
      return <a>Wrong!</a>
    }
  }

  function finalGrade() {
    let correctAnswers = 0
    for (const x of grade) {
      if (x == 1) {
        correctAnswers++
      }
    }
  }

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
              <button onSubmit={handleAnswer}>Submit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
