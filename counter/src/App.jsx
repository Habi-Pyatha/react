import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(15) //[variable,function]
// let counter =15
const addValue=()=>{
//  counter+=1
if(counter<=20){

  setCounter(counter++)
}
//  console.log("Clicked",counter);
}
const removeValue=()=>{
  if(counter>=0){
    
    setCounter(counter--)
  }
  // console.log("click removed",counter);
  
} 
  return (
    <>
      <h1>New Project</h1>
      <h2>Counter value:{counter}</h2>
      <button 
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
