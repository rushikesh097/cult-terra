import React from 'react'

const Card = (props) => {
  return (
    <>
      <span className="relative inline-block" key={props.room._id}>
        <span
          className="absolute top-1 right-4 inline-flex items-center justify-center cursor-pointer hover:bg-yellow-500 px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full"
          onClick={() => {
            props.setShowChangePriceModal(true);
            props.setShowRoomPrice(props.room.price);
            props.setRoomNo(props.room.roomNo);
          }}
        >{`Price- ${props.room.price}`}</span>
        <div
          className={`${
            props.flag ? " bg-green-400 " : " bg-red-400 "
          } rounded-lg shadow-xl hover:shadow-lg px-2 w-36 h-24 align-middle cursor-pointer`}
          type="button"
          onClick={() => {
            props.setRoomNo(props.room.roomNo);
            props.setShowUnbookedModal(props.flag);
            props.setShowbookedModal(!props.flag);
          }}
        >
          <div className="text-lg font-bold pt-6 pb-2 pl-2">{props.room.roomNo}</div>
          <div className="text-base pl-2">{props.room.type}</div>
        </div>
      </span>
    </>
  );
}

export default Card