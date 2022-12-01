import React from "react";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Authentication = (props) => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  return (
    <div className=" max-h-full ">
    {isOnLogin ? (
        <LogIn
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
          setEmail = {props.setEmail}
        />
      ) : (
        <SignUp
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
        />
      )}
    </div>
  );
};

export default Authentication;
