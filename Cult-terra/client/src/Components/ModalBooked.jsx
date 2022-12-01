import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Modalbooked = (props) => {

    const [customerInfo,setCustomerInfo] = useState([])
    useEffect(() => {
        getCustomerInfo();
    }, [])
    
    const getCustomerInfo = () =>{
        axios.get(`http://localhost:5000/customer/getcustomer/${props.roomNo}`)
        .then((response) =>{
            setCustomerInfo(response.data[0]);
            console.log(response.data);
        })
    }


    const updateRoomStatus = () => {
        axios.put(`http://localhost:5000/rooms/upadtestatus/${props.roomNo}/unbooked`)
        .then((response) => {
            props.setRooms((rooms) => {
                return rooms.map((room,index) => {
                  return room.roomNo === props.roomNo
                    ? {
                        _id: room._id,
                        roomNo: props.roomNo,
                        floorNo: room.floorNo,
                        price: room.price,
                        status: "unbooked",
                        type: room.type,
                      }
                    : room;
                });
            })
        })
        .catch(err => console.log(err));
    }

    const deleteCustomer = () => {
        axios.delete(`http://localhost:5000/customer/deletecustomer/${customerInfo._id}`)
        .then((response)=>{
            props.setOpenModal(false)
            updateRoomStatus();
        })
        .catch( (err) => {
            console.log(err);
        })
        return;
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
                    Check-Out Room
                  </h4>
                </div>
                <form className="w-96">
                  <div className="mb-6 mt-5">
                    <label
                      className="block text-indigo-900 text-sm font-bold mb-6"
                      htmlFor="email"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 disabled:bg-gray-300 cursor-not-allowed "
                      type={"text"}
                      name={"name"}
                      value={`${customerInfo.name}`}
                      disabled={true}
                      id="emaipl"
                      placeholder="Name.."
                    />
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
                      value={`${customerInfo.roomNo}`}
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
                      value={`${customerInfo.checkInDate}`}
                      disabled={true}
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 disabled:bg-gray-300 cursor-not-allowed"
                      type={"date"}
                      name={"checkOutDate"}
                      value={`${customerInfo.checkOutDate}`}
                      disabled={true}
                      placeholder="E-Mail"
                    />
                  </div>
                </form>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
                    onClick={deleteCustomer}
                  >
                    Check-out
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

export default Modalbooked