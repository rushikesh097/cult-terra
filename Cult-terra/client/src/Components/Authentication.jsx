import React from "react";

const Authentication = (props) => {
  return (
    <div>
        <h1>Authentication</h1>
      <button
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
