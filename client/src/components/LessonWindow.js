import React from "react"
import {useState, useEffect} from "react";
import Axios from "axios";
//import fetch from "node-fetch";

const fetch = require('node-fetch');

export default function LessonWindow() {
        //listOfEvents is from the get request 
        //var descriptionTest = await fetchDescriptionJSON(titleUI);
        //console.log(descriptionTest);

        const [listOfEvents, setListOfEvents] = useState([])
        const [assignment, setAssignment] = useState(0);
        const [titleUI, setTitle] = useState("");
        const [coordinates, setCoordinates] = useState([]);
        const [description, setDescription] = useState("");
        const [image, setImage] = useState("");

        //to display what is currently at the get request
        useEffect(() => {
            Axios.get("http://localhost:3000/getWikiData").then((response) =>
            setListOfEvents(response.data))   
        }, [])

        function handle() {
                //alert("Hello");
                setAssignment(100);
                //setTitleUI(titleUI);
                var titleDraft = titleUI;
                var titleFinal = titleDraft.replace(/\s/g, '%20');
                var description;

                var url = "https://en.wikipedia.org/w/api.php"; 
                url = url + "?origin=*";

                var params = {
                 //params for the description
                action: "query",
                format: "json", 
                prop: "extracts",
                exchars: 175,
                explaintext: true,
                titles: titleFinal
                };

                Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

   fetch(url)
   .then(res  => 
       res.json()).then(d => {
           //console.log(d);
           var pages = d.query.pages;
           for(var page in pages){
               description = pages[page].extract;
               //console.log("inside json");
               //console.log(description);
               //try this 
               setDescription(description);
               alert(description);

           }
       })


       url = "https://en.wikipedia.org/w/api.php"; 
       url = url + "?origin=*";
       
       params = {
           //params for coordinates 
           action: "query",
           prop: "coordinates", 
           titles: titleFinal,
           format: "json"
       };
       
       Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
       
       fetch(url).then(res => res.json()).then(d => {
               var pages1 = d.query.pages;
               for(var page1 in pages1){
                   coordinates[0] = pages1[page1].coordinates[0].lat; 
                   coordinates[1] = pages1[page1].coordinates[0].lon;   
                   setCoordinates(coordinates);
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
                Axios.post("http://localhost:3000/createWikiData", {
                        assignment: assignment, 
                        title: titleUI,
                        coordinates: coordinates, 
                        description: description, 
                        image: image

                }).then((reponse) => {
                        alert("WikiEvent created");
                        //automatically updates on the page 
                        setListOfEvents([...listOfEvents, {
                                assignment,
                                title: titleUI,
                                coordinates,
                                description,
                                image
                        }])
                }) 

                setTitle("");
                setCoordinates([]);
                setDescription("");
                setImage("");
        }
        

    return <div class="container">
           <div className = "createLesson">
                
           </div>

                <div> 
        
                <input type="text" placeholder = "Event Title..." onChange={(event) =>
                {
                        setTitle(event.target.value);
                }}/>

                <button onClick={handle}> Add Details </button>
                <button onClick={createEvent}> Post Event </button>


                </div>

        </div>
}