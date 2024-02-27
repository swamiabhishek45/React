import React, { useRef, useState } from "react";
import Card from "./Card";


function ForeGround() {
  const ref = useRef();
  const data = [
    //desc, filesize, close, tagDetails

    {
      desc: "lorem ispum doloe sit amer sonnk seklrhoi askndfjo nsdfiho",
      filesize: ".9mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "lorem ispum doloe sit amer sonnk seklrhoi askndfjo nsdfiho",
      filesize: ".9mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "lorem ispum doloe sit amer sonnk seklrhoi askndfjo nsdfiho",
      filesize: ".9mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  useState();
  return (
    <>
      <div ref={ref} className="fixed p-5 z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
          // console.log(item)
        ))}
      </div>
    </>
  );
}

export default ForeGround;
