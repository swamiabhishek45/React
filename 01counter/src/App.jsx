import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0; // variables
  let [counter, setCounter] = useState(0); // hook to change state


  const addValue = () => {
    // counter += 1;
    // console.log('value added', {counter});

    if(counter < 20){
      setCounter(counter+1);
    }

    // setCounter(prevCounter => prevCounter + 1); // 1
    // setCounter(prevCounter => prevCounter + 1); // 2
    // setCounter(prevCounter => prevCounter + 1); // 3
    // setCounter(prevCounter => prevCounter + 1); // 4
      

  };
  const removeValue = () => {
    // counter -= 1;
    // console.log('value removed', {counter});

    if(counter >= 1){
      
      setCounter(counter-1);
    }
    

  };

  return (
    <>
      <h1>Number Counter</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addValue}>
        Increase
      </button>

      <button onClick={removeValue} >Decrease</button>
    </>
  );
}

export default App
