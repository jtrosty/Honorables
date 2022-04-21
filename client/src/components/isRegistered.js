
import React, {useState, loading, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Link, Navigate, Route } from 'react-router-dom'
import Redirect from 'react-router'
import axios from 'axios'
import { Auth0Provider, User, useAuth0 } from '@auth0/auth0-react';
import { Spinner } from 'react-bootstrap';
import StudentView from './StudentView';

function IsRegistered() {
    const navigate = Navigate();
    const [status, setStatus] = useState(null);
    const {isLoading, user} = useAuth0();
    const [username, setUsername] = useState(null);
    const [checkIfRegistered, setIfRegistered] = useState([]);
    const [isRegisteredAlready, setIfAlreadyRegistered] = useState(false);
    const [runOnce, setRunOnce] = useState(true);

    function isUserRegistered() {
        setUsername(user.name);
        //alert(`2: username: ${username}`)

        axios.get('http://localhost:5000/getRegisterDataByName', 
                    { 
                        params: { username: username }
                    }
            )
            .then((response) => setIfRegistered(response.data));
        console.log(checkIfRegistered);
        console.log(isRegisteredAlready);
        if (checkIfRegistered === null) {
            setIfAlreadyRegistered(false);
            alert(`is register: ${isRegisteredAlready}`)
        }
        else {
            setIfAlreadyRegistered(true);
            alert(`is register: ${isRegisteredAlready}`)
        }
    }

    if (isLoading) {
        return <h3>Loadign...</h3>
    }
    else {
        if (setRunOnce) {
            isUserRegistered();
            setRunOnce(false);
        }   
        if (isRegisteredAlready) {
            return (
                navigate("/Lesson", {replace: true})
                    //<Navigate push to='/Lesson' replace={true}/>
            )
        }
        else  {
                <Routes>
                    <Route path="/lesson" element={<StudentView />} />
                </Routes>
        }//<Navigate push to='/RegisterForm' replace={true} />
    }
}
export default IsRegistered