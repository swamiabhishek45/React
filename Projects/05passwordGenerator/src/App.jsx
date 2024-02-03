import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback()

  return (
    <>
      <h1 className=' text-white text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
