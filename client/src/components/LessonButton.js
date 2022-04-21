import React from "react";
import { useNavigate } from "react-router-dom";

const LessonButton = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
      let path = '/Lesson';
      navigate(path);
  }

  return <button 
            type="button" 
            class="btn btn-success btn-lg" 
            onClick={routeChange}
            >
            Lesson
        </button>;
};

export default LessonButton;