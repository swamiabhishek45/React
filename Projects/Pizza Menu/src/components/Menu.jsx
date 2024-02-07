import React from "react";
import Pizza from "./Pizza";

function Menu() {
  return (
    <div>
      <h2 className="text-xl font-bold">Our Menu</h2>
      <div className="my-4 ">
        <Pizza
          name="Pizza Spinaci"
          price="₹99"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgcdny2ejMzRlBe8HlJPxgdsNBgwl5HEopg&usqp=CAU"
          description="Tomato, mozarella, spinach and ricotta cheese"
        />
        <Pizza
          name="Pizza Funghi"
          price="₹129"
          src="https://www.pizzakarolina.com/wp-content/uploads/2021/02/Pizza-Funghi.png"
          description="Tomato, mushrooms"
        />
      </div>
    </div>
  );
}

export default Menu;
