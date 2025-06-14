import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(1)
    // let counter =1
    const addValue=()=>{
      // counter+=1;
      //console.log(counter);//working but not reflecting in UI, the reason why we use
      
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // this way is not gonna increase counter by 4, as react will treat it as same work and update counter by 1.
      //instead u can use callback to trigger updation everytime.
      setCounter(prevCounter=>{
           return  prevCounter+1;
    })
      setCounter((prevCounter)=>{
           return  prevCounter+1;
      })
      setCounter((prevCounter)=>{
            return prevCounter+1;
      })
      setCounter((prevCounter)=>{
           return  prevCounter+1;
      })
    }
    const reduceVal=()=>{
      if(counter>0) counter-=1;
      setCounter(counter);
    }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={reduceVal}>Decrease value</button>
    </>
  )
}

export default App
