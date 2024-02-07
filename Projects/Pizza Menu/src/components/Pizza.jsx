import React from "react";

function Pizza(props) {
  return (
    <div className="flex">
      <img src={props.src} alt="" width={98} />
      <div className="ml-4 ">
        <h2 className="text-xl font-bold">{props.name}</h2>
        <p>{props.description}</p>
        <h1>{props.price}</h1>
      </div>
    </div>
  );
  z;
}

export default Pizza;
