import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherViewButton = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
      let path = '/TeacherView';
      navigate(path);
  }

  return <button 
            type="button" 
            class="btn btn-success btn-lg .btn-block" 
            onClick={routeChange}
            >
            Teacher View
        </button>;
};

export default TeacherViewButton;