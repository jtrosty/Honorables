import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Assignment(props) {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [grade, setGrade] = useState([])
  const [finalGrade, setFinalGrade] = useState(null)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [progressBar, setProgressBar] = useState([])

  function handleAnswer() {
    answers.push(currentAnswer)
    progressBar.pop()
    console.log(answers)
  }

  useEffect(() => {
    axios
      .get('http://localhost:5000/getWikiData', {
        params: { assNum: props.assignment },
      })
      .then((response) => setQuestions(response.data))
  }, [props.assignment])

  useEffect(() => {
    setProgressBar(Array(questions.length).fill(1))
  }, [])

  console.log(answers)
  function rightOrWrong(studentAnswer, teacherAnswer) {
    console.log('rightOrWrong')
    if (studentAnswer.toLowerCase() === teacherAnswer.toLowerCase()) {
      setGrade(...grade, 1)
      return <a>Correct!</a>
    } else {
      setGrade(...grade, 0)
      return <a>Wrong!</a>
    }
  }

  function calcFinalGrade() {
    let correctAnswers = 0
    for (const x of grade) {
      if (x === 1) {
        correctAnswers++
      }
    }
    let grade = (correctAnswers / answers.length) * 100
    return <div>Final Grade: {grade}</div>
  }

  return (
    <div>
      <div>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <p></p>
              <p>Question Number: {index + 1} </p>
              <p>Question: {question.teacherQuestion}</p>
              <input
                placeholder='Answer Here'
                onChange={(event) => {
                  setCurrentAnswer(event.target.value)
                }}
              ></input>
              <button onClick={() => handleAnswer()}>Submit</button>
              {answers.length === parseInt(index) + 1 ? (
                <a>Thank You</a>
              ) : (
                <div></div>
              )}
            </div>
          )
        })}
      </div>
      <div className='container'>
        <p>Progress Indicator</p>
        {answers.map((value, index) => {
          return <a id={index}>O</a>
        })}
        {progressBar.map((value, index) => {
          return <a id={index}>X</a>
        })}
      </div>
    </div>
  )
}
/*{answers.length === index + 1 ? (
                rightOrWrong(answers[index], question.questionAnswer)
              ) : (
                <div></div>
              )}*/
