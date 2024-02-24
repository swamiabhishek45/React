import React from "react";

// {children} is a single prop, which represents the content that should be rendered inside the Container component.
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto ">{children}</div>;
}

export default Container;
