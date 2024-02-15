import { useState } from "react";
import "./App.css";

const messages = ["Learn React 🔯", "Build Resume 📄", "Apply for jobs 👜"];

function App() {
  const [step, setStep] = useState(1);
  // const step = 1

  const handlePrev = () => {

    if(step < 3) {
      setStep(step + 1);

    }
  };
  
  const handleNext = () => {
  if(step > 0){

    setStep(step - 1);
  }
  };

  return (
    <>
      <div className="flex justify-center mt-10 gap-x-20">
        <div
          className={`bg-gray-400 ${
            step >= 1 ? "bg-purple-500" : ""
          }  p-2 px-4 rounded-full`}
        >
          1
        </div>
        <div
          className={`bg-gray-400 ${
            step >= 2 ? "bg-purple-500" : ""
          }  p-2 px-4 rounded-full`}
        >
          2
        </div>
        <div
          className={`bg-gray-400 ${
            step >= 3 ? "bg-purple-500" : ""
          }  p-2 px-4 rounded-full`}
        >
          3
        </div>
      </div>

      <p className="m-10">
        Step {step}: {messages[step - 1]}{" "}
      </p>

      <div className="flex justify-evenly">
        <button
          onClick={handlePrev}
          className="bg-purple-600 p-2 rounded-full px-4"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-600 p-2 rounded-full px-4"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
