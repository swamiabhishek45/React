import Background from "./components/Background";
import ForeGround from "./components/ForeGround";

function App() {

  return (
    <>
    <div className="relative w-full h-screen bg-zinc-800">

     <Background />
     {/* <ForeGround /> */}
     <div className="fixed z-[3] top-0 left-0 w-full h-full"></div>
    </div>
    </>
  );
}

export default App
