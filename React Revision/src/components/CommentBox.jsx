import React from "react";


function commentBox(props) {
    return (
        <div className=" mx-10 mt-5 flex flex-row">
            <img src={props.img} alt="" className="h-10 mr-3 mt-1 rounded-sm" />
            <div className="flex justify-start flex-col">
                <div className="flex gap-2">
                    <h1 className="font-bold ">{props.name}</h1>
                    <span className="text-gray-200">Today at 5:23PM</span>
                </div>
                <div className="flex">{props.comment}</div>
                <span className="text-sm flex text-slate-300">Reply</span>
            </div>
        </div>
    );
}

export default commentBox;
