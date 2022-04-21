import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap'
import { User, useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';


function RegisterForm() {
    const [status, setStatus] = useState(null);
    const {user} = useAuth0();
    const [username, setUsername] = useState(null);
    const [role, setRole] = useState(null);
    const [email, setEmail] = useState(null);
    const [classID, setClassID] = useState(null);
    const [checkIfRegistered, setIfRegistered] = useState([]);

    function handleRoleChange(eventRole) {
        setRole(eventRole.target.value)
    }

    function handleClassSelection(eventRole) {
        setClassID(eventRole.target.value)
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/';
        navigate(path);
    }
    
    function multipleItems() {
        setStatus(true);
        setEmail(user.email);
        setUsername(user.name);
        setStatus(true);
        axios.get('http://localhost:5000/getRegisterDataByName', 
                    { 
                        params: { username: username }
                    }
            )
            .then((response) => setIfRegistered(response.data));
            console.log(checkIfRegistered);
      //  alert(`Check if this works part 2
      //          status:   ${status}, 
      //          username: ${username}, 
      //          role:     ${role}, 
      //          email:    ${email}, 
      //          classID:  ${classID}`)
        
        if (checkIfRegistered === null) {
            axios
                .post('http://localhost:5000/register', {
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
        else {
       //     alert(`Check if this works part 2
       //             status: ${checkIfRegistered.status}, 
       //             username: ${checkIfRegistered.username}, 
       //             role: ${checkIfRegistered.role}, 
       //             email: ${checkIfRegistered.email}, 
       //             classID: ${checkIfRegistered.classID}`)
        }
       // if (role === 'Teacher') {
       //     path = '/TeacherView'

       // }
       // if (role === 'Student') {
       //     path = '/Lesson'
       // }
       // routeChange();
    }
    return (
        <div class='container'>
            <Navbar />
            <div className='User Not Registered'>Hello</div>
            <Row>
                <Col sm>
                    <Form.Group controlId='formRole'>
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select
                        value={role}
                        onChange={handleRoleChange}
                        aria-label='Default select example'
                        defaultValue={"Select Role"}
                        >
                        <option>Choose Your Role</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='formClass'>
                        <Form.Label>Describe Yourself</Form.Label>
                        <Form.Select
                        value={classID}
                        onChange={handleClassSelection}
                        aria-label='Default select example'
                        defaultValue={"Select Class"}
                        >
                        <option>Choose Your Class</option>
                        <option value="HIST101">HIST101</option>
                        <option value="HIST102">HIST102</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <button
                    onClick={ () => multipleItems()} 
                    type="submit"
                    >
                    Register Now
                </button>
            </Row>
        </div>
    )
}
export default RegisterForm;
