import React, { useEffect } from "react";
import { useState } from "react";
import ModalUnbooked from "./ModalUnbooked";
import ModalBooked from "./ModalBooked";
import ChangePrice from "./ChangePrice";
import axios from "axios";
import { Navbar } from "./Navbar";
import { LINK_ROOMS } from "../Data";
import Card from "./Card";

const DashBoard = (props) => {
  const [rooms, setRooms] = useState([]);
  const [showUnbookedModal, setShowUnbookedModal] = useState(false);
  const [showbookedModal, setShowbookedModal] = useState(false);
  const [roomNo, setRoomNo] = useState(0);
  const [showChangePriceModal, setShowChangePriceModal] = useState(false);
  const [showRoomPrice, setShowRoomPrice] = useState(0);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    const response = await axios.get(`${LINK_ROOMS}getall`);
    setRooms(response.data);
  };

  return (
    <div>
      <Navbar setIsOnDashboard={props.setIsOnDashboard} name={props.name} />
      <div className="px-4">
        <div className="flex justify-center items-center bg-white mx-auto my-20 max-w-7xl  rounded-lg p-10">
          <div className=" min-h-fit min-height:85vh flex items-center">
            <div className="flex-1 max-w-7xl mx-auto ">
              <h1 className="text-3xl mb-9 text-center font-bold">Book now</h1>
              <ul className="grid grid-cols-8 grid-rows-5 gap-8">
                {rooms.map((room, index) => {
                  const flag = room.status !== "booked";
                  return (
                    <Card setShowChangePriceModal={setShowChangePriceModal} setShowRoomPrice={setShowRoomPrice} setRoomNo={setRoomNo} setShowUnbookedModal={setShowUnbookedModal} setShowbookedModal={setShowbookedModal} room={room} flag={flag}/>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showUnbookedModal && (
        <ModalUnbooked
          setOpenModal={setShowUnbookedModal}
          roomNo={roomNo}
          setRooms={setRooms}
        ></ModalUnbooked>
      )}
      {showbookedModal && (
        <ModalBooked
          setOpenModal={setShowbookedModal}
          roomNo={roomNo}
          setRooms={setRooms}
        ></ModalBooked>
      )}
      {showChangePriceModal && (
        <ChangePrice
          setOpenModal={setShowChangePriceModal}
          showRoomPrice={showRoomPrice}
          setRooms={setRooms}
          roomNo={roomNo}
        ></ChangePrice>
      )}
    </div>
  );
};

export default DashBoard;
