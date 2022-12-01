import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { LINK_CUSTOMER, LINK_ROOMS } from '../Data';

const ModalUnbooked = (props) => {
    const [customer, setCustomer] = useState({
      name: "",
      roomNo: props.roomNo,
      checkOutDate: new Date().toISOString().slice(0,10)
    });
    const [msg,setMsg] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        setMsg("")
        setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const updateRoomStatus = () => {
        axios.put(`${LINK_ROOMS}upadtestatus/${props.roomNo}/booked`)
        .then((response) => {
            props.setRooms((rooms) => {
                return rooms.map((room,index) => {
                  return room.roomNo === props.roomNo
                    ? {
                        _id: room._id,
                        roomNo: props.roomNo,
                        floorNo: room.floorNo,
                        price: room.price,
                        status: "booked",
                        type: room.type,
                      }
                    : room;
                });
            })
        })
        .catch(err => console.log(err));
    }

    const addCustomer = (e) => {
        e.preventDefault();
        if (customer.name !== "") {
          axios
            .post(`${LINK_CUSTOMER}addcustomer`, customer)
            .then((response) => {
              props.setOpenModal(false);
              updateRoomStatus();
            })
            .catch((err) => console.log(err));
            return;
        }
        setMsg("Fill the name !")
    }

    return (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => props.setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-gray-800">
                    Book Room
                  </h4>
                </div>
                <form className="w-96">
                  <div className="mb-6">
                    <label
                      className="block text-indigo-900 text-sm font-bold mb-6"
                      htmlFor="email"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 "
                      type={"text"}
                      name={"name"}
                      onChange={handleChange}
                      id="emaipl"
                      placeholder="Name.."
                    />
                    <p className="text-red-500 text-xs italic">{msg}</p>
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-indigo-900 text-sm font-bold mb-6"
                      htmlFor="email"
                    >
                      Room No
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 disabled:bg-gray-300 cursor-not-allowed"
                      type={"number"}
                      name={"roomNo"}
                      value={props.roomNo}
                      disabled={true}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-indigo-900 text-sm font-bold mb-6"
                      htmlFor="email"
                    >
                      Check-In Date
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 disabled:bg-gray-300 cursor-not-allowed"
                      type={"date"}
                      name={"checkInDate"}
                      value={`${new Date().toISOString().slice(0, 10)}`}
                      disabled={true}
                      placeholder="E-Mail"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-indigo-900 text-sm font-bold mb-6"
                      htmlFor="email"
                    >
                      Check-Out Date
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900"
                      type={"date"}
                      name={"checkOutDate"}
                      onChange={handleChange}
                      min={new Date().toISOString().slice(0, 10)}
                      value={`${customer.checkOutDate}`}
                      placeholder="E-Mail"
                    />
                  </div>
                </form>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                    onClick={addCustomer}
                  >
                    Book
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={() => props.setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ModalUnbooked