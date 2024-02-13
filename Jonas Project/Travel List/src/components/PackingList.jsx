import React from "react";

function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItem.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default PackingList; 

export function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.desc}
      </span>
      <button>❌&times;</button>
    </li>
  );
}

// dummy data for the list item. Should be replaced with real data when we have a database set up
const initialItem = [
  {
    id: 1,
    desc: "Passport",
    quantify: 2,
    packed: false,
  },
  {
    id: 2,
    desc: "Cap",
    quantity: 4,
    packed: true,
  },
];
