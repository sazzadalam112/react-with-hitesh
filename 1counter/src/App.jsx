import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter , setCounter] = useState(0)

  const addvalue = () => {
    setCounter(counter + 1);
  };
  const removevalue = () => {
    setCounter(counter - 1);
  };
  
  
  return (
   <>
    <h1> Counter</h1>
    <h2>COUNTER VALUE : - {counter}</h2>
    <button onClick={addvalue}>Add-value {counter}</button>
    <button onClick={removevalue}>remove-value {counter}</button>
   </>
  )
}

export default App
