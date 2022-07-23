import React from 'react';
import  {useState} from 'react';
import './App.css'



export default function App() {
  
  const [count,setCount] = useState<number>(0);

  const onClickHandlerPlus = () => {
   count !==5 ?setCount(count+ 1):setCount(count)
    
  }
   const onClickHandlerMinus = () => {
   count ?setCount(count-1):setCount(count)
    
  }
    const onClickHandlerDel = () => {
  setCount(0)
    
  }
  
  
 
  return <div className="app">

   <h1>{count}💰</h1>
      <button className="plus" onClick={onClickHandlerPlus}>+  💰</button>
      <button className="minus"onClick={onClickHandlerMinus}> -  💰 </button>
      <button className="del"onClick={onClickHandlerDel}>🔴</button>
  </div>
}