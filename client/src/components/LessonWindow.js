import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
//import fetch from "node-fetch";

const fetch = require('node-fetch')

export default function LessonWindow({ setMapCoordinates }) {
  //listOfEvents is from the get request
  //var descriptionTest = await fetchDescriptionJSON(titleUI);
  //console.log(descriptionTest);

  const [listOfEvents, setListOfEvents] = useState([])
  const [assignment, setAssignment] = useState(0)
  const [titleUI, setTitle] = useState('')
  const [coordinates, setCoordinates] = useState([])
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [wikiUrl, setWikiUrl] = useState('')
  const [teacherQuestion, setTeacherQuestion] = useState('')
  const [questionAnswer, setQuestionAnswer] = useState('')
  // Adding parent coordinate setter
  // const [parentCoors, setParentCoors] = useState([])
  // Adding setter for parent coordinate setter

  //to display what is currently at the get request
  useEffect(() => {
    axios
      .get('http://localhost:3000/getWikiData')
      .then((response) => setListOfEvents(response.data))
  }, [])

  function handle() {
    //alert("Hello");
    //setAssignment(100);
    //setTitleUI(titleUI);
    setMapCoordinates([])
    var titleDraft = titleUI
    var titleFinal = titleDraft.replace(/\s/g, '%20')
    var description
    var wikiUrl

    var url = 'https://en.wikipedia.org/w/api.php'
    url = url + '?origin=*'

    var params = {
      //params for the description
      action: 'query',
      format: 'json',
      prop: 'extracts',
      exchars: 175,
      explaintext: true,
      titles: titleFinal,
    }

    Object.keys(params).forEach(function (key) {
      url += '&' + key + '=' + params[key]
    })

    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        var pages = d.query.pages
        for (var page in pages) {
          description = pages[page].extract
          //console.log("inside json");
          //console.log(description);
          //try this
          setDescription(description)
          alert(description)
        }
      })

    url = 'https://en.wikipedia.org/w/api.php'
    url = url + '?origin=*'

    params = {
      //params for coordinates
      action: 'query',
      prop: 'coordinates',
      titles: titleFinal,
      format: 'json',
    }

    Object.keys(params).forEach(function (key) {
      url += '&' + key + '=' + params[key]
    })

    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        var pages1 = d.query.pages
        for (var page1 in pages1) {
          coordinates[0] = pages1[page1].coordinates[0].lat
          coordinates[1] = pages1[page1].coordinates[0].lon
          setCoordinates(coordinates)
          console.log('weeee')
          setMapCoordinates(coordinates)
          //setMapCoordinates([])
        }
        // Drilling in from parent component to pass to GoogleMap component
      })

    //wikiUrl
    url = 'https://en.wikipedia.org/w/api.php'
    url = url + '?origin=*'

    params = {
      //params for the url
      action: 'query',
      format: 'json',
      //prop: "extracts&exintro&explaintext", what we were using to get the whole summary
      prop: 'info',
      inprop: 'url',
      titles: titleFinal,
    }

    Object.keys(params).forEach(function (key) {
      url += '&' + key + '=' + params[key]
    })

    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        //console.log(d);
        var pages2 = d.query.pages
        for (var page2 in pages2) {
          wikiUrl = pages2[page2].fullurl
          setWikiUrl(wikiUrl)
        }
      })

    //createEvent();
  }

  //once the button is pushed send the post request
  //should do once the button is pressed take the title and run it through the wikipedia api
  //if all fields have been filled then call a different function that will post
  //if not should call a different function that popups the required fields to be filled out then
  //posts
  //titleUI was not the name associated with the backend
  const createEvent = () => {
    axios
      .post('http://localhost:3000/createWikiData', {
        assignment: assignment,
        title: titleUI,
        coordinates: coordinates,
        description: description,
        image: image,
        wikiUrl: wikiUrl,
        teacherQuestion: teacherQuestion,
        questionAnswer: questionAnswer,
      })
      .then((reponse) => {
        alert('WikiEvent created')
        //automatically updates on the page
        setListOfEvents([
          ...listOfEvents,
          {
            assignment,
            title: titleUI,
            coordinates,
            description,
            image,
            wikiUrl,
            teacherQuestion,
            questionAnswer,
          },
        ])
      })
    setAssignment()
    setTitle('')
    setCoordinates([])
    setDescription('')
    setImage('')
    setWikiUrl('')
    setTeacherQuestion('')
    setQuestionAnswer('')
  }

  function displayAssignment() {
    alert(assignment)
  }

  function getAssignment() {
    return (
      <div>
        <h1>Assignment: {assignment}</h1>
      </div>
    )
  }

  return (
    <div class='container'>
      <div className='createLesson'></div>
      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <textarea
          rows='5'
          cols='46'
          placeholder='Question'
          onChange={(event) => {
            setTeacherQuestion(event.target.value)
          }}
        ></textarea>
      </div>
      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <textarea
          rows='2'
          cols='46'
          placeholder='Answer'
          onChange={(event) => {
            setQuestionAnswer(event.target.value)
          }}
        ></textarea>
      </div>
      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <textarea
          rows='2'
          cols='46'
          placeholder='Description...'
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        ></textarea>
      </div>
      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <input
          type='number'
          placeholder='Assignment Number...'
          onChange={(event) => {
            setAssignment(event.target.value)
          }}
        />

        <button onClick={displayAssignment}>Update Assignment #</button>
      </div>

      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <input
          type='text'
          placeholder='Event Title...'
          onChange={(event) => {
            setTitle(event.target.value)
          }}
        />

        <button onClick={handle}> Add Details </button>
      </div>

      <div
        className='d-flex justify-content-center'
        style={{ marginTop: '5px' }}
      >
        <button onClick={createEvent}> Post Event </button>
      </div>

      <div></div>
    </div>
  )
}
