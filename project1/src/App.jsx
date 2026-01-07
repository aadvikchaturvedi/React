import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0); 
  const [bold, setBold] = useState(false); 
  const addValue = () => {
    for(let i=1; i<6; i++){
      setCounter((prev) =>{return prev+i}) ; // here callback is added to avoid reconcilation 
    }
  }

  const removeValue = () => {
    setCounter(counter-1); 
  }

  return (
    <>
      <h1>React Course with Hitesh</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value
      </button>

      <button onClick={removeValue}>
        Remove Value
      </button>

      <p
        id="footer"
        style={{ fontWeight: bold ? 'bold' : 'normal' }}
        onClick={() => setBold(true)}
      >
        Footer: {counter}
      </p>
    </>
  )
}

export default App
