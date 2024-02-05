import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("Click below to Get Some Advice");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice)
    setCount(count+1);
  }
  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of Advice
      </p>
    </>
  );
}

export default App
