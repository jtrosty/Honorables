import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button type="button" 
                class="btn btn-primary btn-lg .btn-block" 
                onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;