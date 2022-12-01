import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { LINK_ROOMS } from '../Data'

const ChangePrice = (props) => {

  const [newPrice, setNewPrice] = useState(props.showRoomPrice)

  const updatePrice = () =>{
    axios.put(`${LINK_ROOMS}updateprice/${props.roomNo}/${newPrice}`)
    .then((response)=>{
      props.setRooms((rooms) => {
        return rooms.map((room,index) => {
          return room.roomNo === props.roomNo
            ? {
                _id: room._id,
                roomNo: props.roomNo,
                floorNo: room.floorNo,
                price: newPrice,
                status: room.status,
                type: room.type,
              }
            : room;
        });
    })
    }).catch((err)=>{console.log(err)})

    props.setOpenModal(false)
  }


  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => props.setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 ">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  Change Price?
                </h4>

                <label
                  className="block text-indigo-900 text-sm font-bold mb-3 mt-6"
                  htmlFor="email"
                >
                  Previous price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 disabled:bg-gray-300 cursor-not-allowed"
                  type={"number"}
                  name={"roomNo"}
                  disabled={true}
                  value={props.showRoomPrice}
                />
                <label
                  className="block text-indigo-900 text-sm font-bold mb-3 mt-6"
                  htmlFor="email"
                >
                  New Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:border-indigo-900 "
                  type={"number"}
                  placeholder="Price"
                  min={"0"}
                  onChange={(e) => { setNewPrice(Math.abs(e.target.value))}}
                />

                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={updatePrice}
                  >
                    Change Price
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
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
    </>
  )
}

export default ChangePrice