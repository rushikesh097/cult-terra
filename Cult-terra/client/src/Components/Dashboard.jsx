import React from 'react'

const DashBoard = (props) => {
  return (
    <div>
        <h1>Dashborad</h1>
      <button
        onClick={() => {
          props.setIsOnDashboard((isOnDashboard) => !isOnDashboard);
        }}
      >
        click
      </button>
    </div>
  );
}

export default DashBoard