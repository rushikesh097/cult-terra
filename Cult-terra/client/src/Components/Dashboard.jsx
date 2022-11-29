import React, { useEffect } from 'react'
import { useState } from 'react';
import ModalUnbooked from './ModalUnbooked'
import ModalBooked from './ModalBooked'
import axios from "axios"

const DashBoard = (props) => {
  const [rooms, setRooms] = useState([]);
  const [showUnbookedModal, setShowUnbookedModal] = useState(false);
  const [showbookedModal, setShowbookedModal] = useState(false);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () =>{
    const response = await axios.get("http://localhost:5000/rooms/getall");
    setRooms(response.data);
  }

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
      <h1>Book Room</h1>
      <div className="min-h-screen flex items-center">
        <div className="flex-1 max-w-4xl mx-auto ">
          <ul className="grid grid-cols-8 grid-rows-5 gap-8">
            {rooms.map((room,index)=>(
              <button key={room._id} className={`${ room.status=== 'booked' ? " bg-green-400 " :" bg-red-400 "} rounded-lg shadow-xl hover:shadow-lg text-center align-text-top w-24 h-24 font-bold`} type="button"
                onClick={() => {
                    room.status==='unbooked'?setShowUnbookedModal(true):setShowbookedModal(true)
                }}>{room.roomNo}</button> 
            ))}
          </ul>
        </div>
      </div>
      {showUnbookedModal && <ModalUnbooked setOpenModal={setShowUnbookedModal}></ModalUnbooked> }
      {showbookedModal && <ModalBooked setOpenModal={setShowbookedModal}></ModalBooked> }
    </div>
  );
}

export default DashBoard