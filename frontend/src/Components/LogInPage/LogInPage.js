import React, { useState } from 'react';

import './LogInPage.css';

const LogInPage = () => {
  const[isAutheticated, setisAutheticated] = useState(false);

  function login(){
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated)
  }

  function logout(){
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated)
  }
  return (
    <div className="login-page">
      <button onClick={login}>Login</button>
      <br/>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LogInPage;