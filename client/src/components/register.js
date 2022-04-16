import React, {useState} from 'react'
import axios from 'axios'
import Profile from './Profile';
import { Container, Row, Col, Button, Alert, Card, Form } from 'react-bootstrap'
import { Auth0Provider, User } from '@auth0/auth0-react';


export default function Register() {
    const [status, setStatus] = useState(null);
    const [username, setUsername] = useState(null);
    const [role, setRole] = useState(null);
    const [email, setEmail] = useState(null);
    const [classID, setClassID] = useState(null);
    
    function multipleItems() {
        setEmail(User.email);
        setUsername(User.username);
        setStatus(true);
        axios
            .post('http://localhost:3000/register', {
                status: status,
                username: username,
                role: role,
                email: email,
                classID: classID,
            })
            .then((response) => {
                alert(`${username} registered!`)
            })
    }

    return (
    <div class='container'>
        <div className='createLesson'></div>
            <Form.Group controlId='formSelect'>
                <Form.Label>Describe Yourself</Form.Label>
                <Form.Select
                value={role}
                onChange={setRole}
                aria-label='Default select example'
                >
                <option>Select Role</option>
                <option>Teacher</option>
                <option>Student</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='formSelect'>
                <Form.Label>Describe Yourself</Form.Label>
                <Form.Select
                value={classID}
                onChange={setClassID}
                aria-label='Default select example'
                >
                <option>Slected Course</option>
                <option>HIST101</option>
                <option>HIST102</option>
                </Form.Select>
            </Form.Group>
            <Button
              variant='secondary'
              type='submit'
              style={{ marginBottom: '15px' }}
              onClick={multipleItems()} 
            >
              Student View
            </Button>
    </div>
    )
}