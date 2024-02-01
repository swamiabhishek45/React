import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Sample from "./sample.jsx";
// import "./index.css";

function MyApp() {
  return ( 
    <div>
      <h2>This is MyApp Component</h2>
    </div>
  );
}

// IT'S NOT WORKING because WRONG SYNTAX
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://facebook.github.io/react/",
//     target: "_blank",
//   },
//   children: "Click me to visit",
// };

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const username = "Abhishek";

const reactElement = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: "_blank"
    },
    "Click me to visit Google",
   
   username
)

ReactDOM.createRoot(document.getElementById("root")).render(

    reactElement
    // <MyApp />

);
