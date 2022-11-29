import React from 'react'

const DashBoard = (props) => {
  return (
    <div>
      <h1 className='text-slate-500 text-3xl font-bold'>Dashborad</h1>
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
}

export default DashBoard