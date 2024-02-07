import React from "react";

function Item({ name = "Water Bottel", isPacked = true }) {
//   if (isPacked) {
//     return <li>-{name} ☑️</li>;
//   } else{
//     return <li>-{name}</li>
//   }

// OR

// return (
//     <li className="item">
//         {isPacked? ( <del>{name + '☑️'}</del>) : (name)}
//     </li>
// )

// OR

return (
    <li>
        {name} {isPacked && "☑️"}
    </li>
)
}

export default Item;
