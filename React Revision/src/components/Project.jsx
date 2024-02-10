import React from 'react'
import Card from "./components/Card";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

function Project() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-evenly">
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UCivYGhLhvUX57pLBj0vgWw-ERzCQ7Rusw&usqp=CAU"
          }
          title="Shoes"
          des="This is shoes card"
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zyhum1Qafnoj5ABcky_-hD02-o5EcXblhA&usqp=CAU"
          }
          title="Watch"
          des="This is watch card"
        />
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIVUttoK6yk8bxOv8Xw_DdZFBAu1haGyRUA&usqp=CAU"
          }
          title="Shirt"
          des="This is Shirts card"
        />
      </div>
      <section className="m-8 mx-14 w-80 p-2 bg-gray-100 rounded-md shadow-lg">
        <h1 className="font-bold text-2xl mb-4">Sally Ride's Paking List</h1>
        <ul>
          <Item isPacked={undefined} name="Space Suit" />
          <Item isPacked={false} name="Astronaut Helmet" />
          <Item isPacked={true} name="Lunar Module" />
          <br />
          <br />
        </ul>
      </section>
    </div>
  );
}

export default Project
