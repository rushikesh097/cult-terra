import React, { useEffect } from "react";
import { useState } from "react";
import ModalUnbooked from "./ModalUnbooked";
import ModalBooked from "./ModalBooked";
import ChangePrice from "./ChangePrice";
import axios from "axios";
import { Navbar } from "./Navbar";
import { LINK_ROOMS } from "../Data";

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
                    <>
                      <span className="relative inline-block" key={room._id}>
                        <span
                          className="absolute top-1 right-4 inline-flex items-center justify-center cursor-pointer hover:bg-yellow-500 px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full"
                          onClick={() => {
                            setShowChangePriceModal(true);
                            setShowRoomPrice(room.price);
                            setRoomNo(room.roomNo);
                          }}
                        >{`Price- ${room.price}`}</span>
                        <div
                          data-tooltip-target="tooltip-default"
                          className={`${
                            flag ? " bg-green-400 " : " bg-red-400 "
                          } rounded-lg shadow-xl hover:shadow-lg px-2 w-36 h-24 align-middle cursor-pointer`}
                          type="button"
                          onClick={() => {
                            setRoomNo(room.roomNo);
                            setShowUnbookedModal(flag);
                            setShowbookedModal(!flag);
                          }}
                        >
                          <div className="text-lg font-bold pt-6 pb-2 pl-2">
                            {room.roomNo}
                          </div>
                          <div className="text-base pl-2">{room.type}</div>
                        </div>
                      </span>
                    </>
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
