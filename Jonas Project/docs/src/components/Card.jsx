import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex items-center justify-between mb-2 px-8 py-3">
            <h1>{data.filesize}</h1>
            <span className="h-8 w-8 bg-zinc-200 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose size="1em" color="#000" />
              ) : (
                <HiOutlineDownload size="1em" color="#000" />
              )}
            </span>
          </div>
          {data.tagDetails.isOpen && (
            <div
              className={`tag w-full h-10 py-4 flex justify-center items-center ${data.tagDetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}
            >
              <h3 className="text-sm font-semibold">
                {data.tagDetails.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
