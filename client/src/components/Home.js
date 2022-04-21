import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Card, Form } from 'react-bootstrap'
import map from '../img/map.jpg'
import LoginButton from './Login'
import LogoutButton from './Logout'
import RegisterButton from './RegisterButton'
import LessonButton from './LessonButton'
import Profile from './Profile'
import RegisterForm from './RegisterForm'
import {isAuthenticated, useAuth0} from '@auth0/auth0-react'
import axios from 'axios'
import StudentView from './StudentView'
import TeacherViewButton from './TeacherViewButton'

function Home() {
  const [accessLevel, setAccessLevel] = useState(false);
  const {isAuthenticated, user} = useAuth0();
  const [profile, setIfRegistered] = useState([null]);
  const [isStudent, setStudent] = useState(false);
  const [isTeacher, setTeacher] = useState(false);
  const [getProfileNotRun, setIfRan] = useState(true);
  const [isNotRegistered, setNotRegistration] = useState(false);



  function getUserProfile() {
    setIfRan(false);
      
    axios.get('http://localhost:5000/getRegisterDataByName', 
                { 
                    params: { username: user.name }
                }
        )
        .then((response) => setIfRegistered(response.data));
    if (profile.role === 'Student') {
      setStudent(true);
      //alert(`Person is a ${profile.role}`);
    }
    if (profile.role === 'Teacher') {
      setTeacher(true);
    }
    if (profile === null) {
      setNotRegistration(true);
    }
  }

  useEffect(() => {
    if (isAuthenticated && getProfileNotRun) {
      getUserProfile();
    }
    if (profile != null) {
      if (profile.role === 'Teacher') {
        setTeacher(true);
      }
      if (profile.role === 'Student') {
        setStudent(true);
        //alert(`we made it student is ${isStudent}`)
      }
    }
    else {
      setNotRegistration(true);
      }
    }
)

  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <Form>
            <div>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
            <div>
            <Row>
              { isStudent ? <LessonButton /> : <div />}
            </Row>
            <Row>
              { isTeacher ? <TeacherViewButton /> : <div />}
            </Row>
            <Row>
              { isNotRegistered ? <RegisterButton /> : <div />}
            </Row>
            </div>
          </Form>
          <Card className='mb-3' style={{ color: '#000' }}>
            <Card.Img variant='top' src={map} style={{ height: '25rem' }} />
            <Card.Body>
              <Card.Title>Welcome to iMap</Card.Title>
              <Card.Text>
                Get ready for an imersive and interactive learning experience!
                
              </Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
          <Alert>
            Sanka Fernando, Johnathan Trost, Michael Marron, Johnathan Luu
          </Alert>
        </Container>
      </header>
    </div>
  )
}

export default Home
