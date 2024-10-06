import { useState } from 'react'

import './App.css'

function App() {
  const [ number, setNumber ] = useState(0);
  function addNumber(){
    return setNumber(number+1)
  }
  function decNumber(){
    return setNumber(number-1)
  }

  return (
    <>
     <h1>Basic React App</h1>
     <h3>Counter : {number}</h3>
     <button onClick={addNumber}>Add Number</button>{"  "}
     <button onClick={decNumber}>Decrease Number</button>
    </>
  )
}

export default App
