import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="flex  justify-center items-center p-8 h-full mx-auto">
          <h1 className="text-3xl font-semibold">My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-gray-800 ">
          <Card src={{}} />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Projects;
