import React from "react";

function Card(props) {
  return (
    <div className=" flex px-6 py-4 bg-white rounded shadow">
      <div className=" p-6 border-2 border-red-400 w-96 h-66 rounded-lg shadow-md">
        <img src={props.src} style={{border: "2px solid red"}} className="ml-20 p-2" width="150" alt="" />
        <h1 className="text-3xl my-4 font-bold">{props.title}</h1>
        <p>{props.des}</p>
        <button className="bg-orange-500 p-3 px-8 mt-3 rounded-full cursor-pointer font-bold text-lg hover:bg-orange-600">Buy</button>
      </div>
        <div>
      </div>
    </div>
  );
}

export default Card;
