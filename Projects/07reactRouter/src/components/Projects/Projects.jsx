import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center p-8 h-full mx-auto">
          <h1 className="text-3xl font-semibold">My Projects</h1>
        </div>
        <div className="flex gap-4 justify-evenly">
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
