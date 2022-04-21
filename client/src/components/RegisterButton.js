import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {

  let navigate = useNavigate();
  const routeChange = () =>{
      let path = '/RegisterForm';
      navigate(path);
  }

  return <button 
            type="button" class="btn btn-info btn-lg .btn-block" 
            onClick={routeChange}
            >
            Register
        </button>;
};

export default RegisterButton;