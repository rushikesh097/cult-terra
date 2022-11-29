import React from "react";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Authentication = (props) => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  return (
    <div>
      <h1 className="text-slate-500 text-4xl font-bold">Authentication</h1>
      {isOnLogin ? (
        <LogIn
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
        />
      ) : (
        <SignUp
          setIsOnLogin={setIsOnLogin}
          setIsOnDashboard={props.setIsOnDashboard}
        />
      )}
      <button
        className="bg-cyan-400 py-1 px-5 rounded-lg active:bg-cyan-700 active:text-white"
        onClick={() => {
          props.setIsOnDashboard((isOnDashboard) => !isOnDashboard);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Authentication;
