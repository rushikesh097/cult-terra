import React from "react";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Authentication = (props) => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  return (
    <div className="max-h-full">
    {isOnLogin ? (
        <LogIn
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
          setName = {props.setName}
        />
      ) : (
        <SignUp
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
          setName={props.setName}
        />
      )}
    </div>
  );
};

export default Authentication;
