import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([]);
useEffect(() => {
  fetch('https://api.github.com/users/Abbad01').then(response=>response.json()).then(data=>{setData(data)});
}, [])


  return (
    <div className="bg-gray-400 text-center"> Github followers:{data.followers}</div>
  )
}

export default Github