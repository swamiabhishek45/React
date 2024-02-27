import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

function Card() {
  return (
    <>
      <div className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex items-center justify-between mb-2 px-8 py-3">
            <h1>.4mb</h1>
            <span className="h-8 w-8 bg-zinc-200 rounded-full flex items-center justify-center">
              <HiOutlineDownload size="1em" color="#000" />
            </span>
          </div>
          <div className="tag w-full h-10 bg-sky-200"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
