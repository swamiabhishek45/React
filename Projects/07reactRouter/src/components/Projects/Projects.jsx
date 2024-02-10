import React from "react";
import Card from "./Card";
import P1 from '../../assets/P1.png'

function Projects() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="flex  justify-center items-center p-8 h-full mx-auto">
          <h1 className="text-4xl dark:text-white  font-bold">My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-gray-800 ">
          <Card img={P1} name="Spotify Clone" desc="This is simple spotify clone" T1="#HTML" T2="#CSS" T3="#JavaScript" btn="Get Code" />
          <Card img={P1} name="Spotify Clone" desc="This is simple spotify clone" T1="#HTML" T2="#CSS" T3="#JavaScript" btn="Get Code" />
          <Card img={P1} name="Spotify Clone" desc="This is simple spotify clone" T1="#HTML" T2="#CSS" T3="#JavaScript" btn="Get Code" />
          <Card img={P1} name="Spotify Clone" desc="This is simple spotify clone" T1="#HTML" T2="#CSS" T3="#JavaScript" btn="Get Code" />
          <Card img={P1} name="Spotify Clone" desc="This is simple spotify clone" T1="#HTML" T2="#CSS" T3="#JavaScript" btn="Get Code" />
          
        </div>
      </div>
    </>
  );
}

export default Projects;
