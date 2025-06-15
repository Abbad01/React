import { useState } from 'react'
import './index.css'

function App() {
  const [bgColor, setbgColor] = useState("olive")
  const colors=["red", "green", "blue", "yellow"];
  return (
    <div  style={{backgroundColor:bgColor}} className="h-screen flex justify-center items-center">
      <div className=" h-1/4 px-2 rounded opacity-90 bg-gray-200 flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl">Pick a color</h1>
        <div className=" flex gap-2">
          {
            colors.map((colour)=> 
            <button onClick={()=>setbgColor(colour)} style={{backgroundColor:colour}} className="w-15 px-2 py-1 rounded ">{colour}</button>
            )
          }
        </div>
        </div> 
    </div>
  )
}
export default App
