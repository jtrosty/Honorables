import React from 'react'
import {useState, useEffect } from "react";
import Axios from "axios";
//import '../App.css';
//import '/'
//import './App.css';
//import './Messages.css';
import Navbar from './Navbar';
import {Auth0Provider, User, useAuth0} from '@auth0/auth0-react';
import Profile from './Profile';
import '../App.css';

function Messages() {

    
    const {user, isAuthenticated} = useAuth0();
    //var hardCodeProfile = user.email;
    var hardCodeDiscussion = "General";
    //var hardCodeProfile = "mike";

    const [listOfMessages, setListOfMessages] = useState([]);
    //const [profile, setProfile] = useState(hardCodeProfile);
    const [profile, setProfile] = useState("");
    const [title, setTitle] = useState("General");
    const [text, setText] = useState("");
    const [test, setTest] = useState("");
    //setTest(user.email);
    //var ourVar = user.email;
    //alert(user.email);
    //var ourVar;
    //title = "mike";
    //setTest(user.email);
    //const ourVar = user.email;
    //setProfile(hardCodeProfile);
    //setTitle(hardCodeDiscussion);
    var ourVar;
    
    useEffect(() => {
        //ourVar = user.email;
        //helper();
        //myFunc();
        //setProfile(user.email);
        //ourVar = await user.email;
        //myFunc();
        //setProfile(user.email);
        myFunc2();
        //setTimeout
        Axios.get("http://localhost:5000/getChatData").then((response) => {
          setListOfMessages(response.data)
        });
        //setProfile(user.email);
      });

      function helper(){
          //setProfile(hardCodeProfile);
          //setTitle(hardCodeDiscussion);
          //setText(event.target.value);
          //setProfile(user.email);
          //ourVar = user.email;
      }

      function helper2(val) {
          setText(val);
          setProfile(user.email);
          //alert(profile);
          //alert(user.email);
          //alert(user.email);
      }

        async function myFunc() {
        //setProfile(user.email);
        //return profile;

        //await setProfile(user.email);
        //return profile;
        ourVar = await user.email;
        return ourVar;
      }

      async function myFunc2 () {
        setProfile(user.email);
      }

      //myFunc();
      

      const createMessage = () => {
         // helper();
        //setProfile("mike");
        //setTitle(hardCodeDiscussion);
        //setProfile(user.email);
        Axios.post("http://localhost:5000/createChatData", {profile: profile, title: title, text: text}).then((response) => {
          //alert("User created");
          setListOfMessages([...listOfMessages, {profile, title, text}])
        });
        setProfile(user.email);
    };

   async function addMessages() {
      {listOfMessages.map((message) => {
              
        if(message.profile === profile){

            return (
                <>
                <div className = "sender">
                <h1 className = "senderText" >{message.text}</h1> 
                </div>
                <div> </div>
                </>
            )
        }else {
            return (
                <>
                <h1 className = "receiverName">{message.profile}</h1>
                <div className = "receiver">
            
                    <h1 className = "receiverText">{message.text}</h1> 
                </div>
                <div> </div>
                </>
            )
        }
    })} 
    }

    //setProfile(hardCodeProfile);
    //setTitle(hardCodeDiscussion);

return(
    <div className = "broad">
        <div>
            <Navbar />
        </div>
        
        
        <div className = "selectDiscussion">
            
        </div>

        <div className = "messagingArea">
            <h1 className = "ourHeader"> {hardCodeDiscussion} Discussion Forum </h1>
        <div className = "messageDisplay">
          
        {listOfMessages.map((message) => {
              
              if(message.profile === profile){

                  return (
                      <>
                      <div className = "sender">
                      <h1 className = "senderText" >{message.text}</h1> 
                      </div>
                      <div> </div>
                      </>
                  )
              }else {
                  return (
                      <>
                      <h1 className = "receiverName">{message.profile}</h1>
                      <div className = "receiver">
                  
                          <h1 className = "receiverText">{message.text}</h1> 
                      </div>
                      <div> </div>
                      </>
                  )
              }
          })} 
        </div>
      
        <form onSubmit={createMessage} className= "ourForm">
            <input classname = "inputBox" value={text} onChange={(event) => 
                helper2(event.target.value)
                
                } placeholder = "Send a message..." />
            <button type = "submit" disabled={!text}>Send</button>
        </form>
        
        </div>
    </div>
)
}

export default Messages;
