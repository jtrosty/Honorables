import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Assignment(props) {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [grade, setGrade] = useState([])
  const [finalGrade, setFinalGrade] = useState(-1)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [progressBar, setProgressBar] = useState([])
  const [progress, setProgress] = useState(null)

  function handleAnswer() {
    answers.push(currentAnswer)
    progressBar.pop()
    updateProg()
    console.log(answers)
  }

  function calcFinalGrade() {
    let correctAnswers = 0
    for (let i = 0; i < answers.length; i++) {
      if (
        answers[i].toLowerCase() === questions[i].questionAnswer.toLowerCase()
      ) {
        correctAnswers++
      }
    }
    setFinalGrade((correctAnswers / questions.length) * 100)
    console.log(
      'correct Ans: ' +
        correctAnswers +
        ' questions.length: ' +
        questions.length
    )
  }

  function updateProg() {
    setProgress({
      ...progress,
      prog: (answers.length / questions.length) * 100,
    })
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

  //console.log(answers)

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
            </div>
          )
        })}
      </div>
      <br />
      <div className='container'>
        <div class='row'>
          <div class='col text-center'>
            <p>Progress Indicator</p>
            <ProgressBar
              striped
              variant='success'
              now={(answers.length / questions.length) * 100}
            />
            <br />
            <button onClick={calcFinalGrade}>Submit For Grading</button>
          </div>
          {finalGrade === -1 ? <a></a> : <a>Final Grade: {finalGrade}%</a>}
        </div>
      </div>
    </div>
  )
}
/*{answers.length === index + 1 ? (
                rightOrWrong(answers[index], question.questionAnswer)
              ) : (
                <div></div>
              )}
 Baltimore Belgium False
        {answers.map((value, index) => {
          return <a id={index}>O</a>
        })}
        {progressBar.map((value, index) => {
          return <a id={index}>X</a>
        })}             
*/
