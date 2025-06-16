import { useState, useCallback,useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber]=useState(false);
  const[charAllowed, setCharAllowed]=useState(false);
  const[password, setPassword]=useState("")
  const passwordRef=useRef(null);//This reference is attached to the input field that displays the password. 
  // We use it to programmatically select the text when copying.


//   ✅ What is useCallback?
// Memoizes a callback function, so it doesn't get recreated on every render — 
// useful for performance optimization.

/*
1.useState → to store and manage state values like length, password, etc.

2.useEffect → runs side effects like regenerating password when dependencies change.

3.useCallback → memoizes the password generation function to avoid recreating it unnecessarily.

4.useRef → gives direct access to DOM elements (used to copy the password input).

*/


const passwordGenerator=useCallback(()=>{
  let pass="";
  
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers="0123456789";
  const specialChars="!@#$%^&*<>"
  if(number) str+=numbers;
  if(charAllowed) str+=specialChars;
  for (let i = 1; i <=length; i++) {//length is the state
    let char =Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);
  }

  setPassword(pass);
}, [length,number,charAllowed])

const copyPassword=()=>{
  navigator.clipboard.writeText(password);
  passwordRef.current?.select();
};

//Uses browser’s navigator.clipboard API to copy.

//Then selects the input text using ref.



useEffect(()=>{
  passwordGenerator()//the function that will get triggered on chabge of dependencies
},
[length,number,charAllowed,passwordGenerator])//dependencies
  return (
    <>
    <div className="text-white text-4xl flex justify-center items-center h-screen">
      
      <div className="  w-120 h-50 overflow-hidden" >
        <div className="flex">
          <input type="text" value={password} placeholder="password" className="bg-gray-300 px-2 py-1 w-2/3 m-2 rounded text-white" readOnly  ></input>
          <button className="bg-blue-300 w-30 h-12 text-center rounded m-2 " onClick={copyPassword}>copy</button>
        </div>
        <div flex justify-between overfow-hidden>
            <input type="range" min={6} max={100} value={length} className="cursor-pointer m-2" onChange={(e)=>{setLength(e.target.value)}}></input>
            <label className="text-xl text-">Length:{length}</label>
            <input className="ml-2" type="checkbox" defaultChecked={number} id="numberInput" onChange={()=> setNumber((prev)=>!prev)}></input>
            <label className="text-xl"> Numbers</label> 
            <input className="ml-2" type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>setCharAllowed((prev)=>!prev)}></input> 
             <label className="text-xl"> Characters</label>
        </div>
        <h1 className="text-white text-2xl flex justify-center mt-6">Password Generator</h1>
      </div>
      
    </div>
    
    </>
  )
}

export default App
