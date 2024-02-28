import { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./hooks/useThrottle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttleHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttleHandleResize);

    return () => {
      window.removeEventListener("resize", throttleHandleResize);
    };
  });

  return (
    <>
      <div>
        Window Size: {windowSize.width} X {windowSize.height}
      </div>
    </>
  );
}

export default App;
