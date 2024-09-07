import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter] = useState(7)
 // let counter = 7

  const addValue = ()=>{
    console.log("clicked",counter);
   counter = counter + 1
   setCounter(counter)
  }
   const removeValue = ()=>{
    setCounter(counter - 1)
   }
  return (
    <>
   <h2>Chai or React</h2>
   <h1>Counter value:{counter}</h1>
   <button
     onClick={addValue}
   >Add value{counter}</button>
   <br />
   <button
   onClick={removeValue}
   >Remove Value {counter}</button>
   <p>Footer{counter}</p>
    </>
  )
}

export default App
