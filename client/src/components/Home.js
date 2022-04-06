import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Card, Form } from 'react-bootstrap'
import map from '../img/map.jpg'

function Home() {
  const [accessLevel, setAccessLevel] = React.useState('')

  function handleAccessChange(event) {
    setAccessLevel(event.target.value)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Example@email.com' />
                  <Form.Text className='text-muted'>
                    From Student/Teacher Profile
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formSelect'>
                  <Form.Label>Describe Yourself</Form.Label>
                  <Form.Select
                    value={accessLevel}
                    onChange={handleAccessChange}
                    aria-label='Default select example'
                  >
                    <option>Choose Your Title</option>
                    <option>Teacher</option>
                    <option>Student</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant='secondary'
              type='submit'
              style={{ marginBottom: '15px' }}
              href={accessLevel === 'Teacher' ? '/TeacherView' : '/Lesson'}
            >
              Login
            </Button>
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
