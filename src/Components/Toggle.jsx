import React ,{ useState}from 'react'

export default function Toggle() {
const [toggle,toggleSet] =useState(true);

    

  return (
    <div>
{toggle &&(
    <p>
        Clicked the button 
    </p>
)}
{ toggle||(
    <p>
        Click the button 
    </p>
)}
<button onClick={
    ()=>{toggleSet(!toggle)}
}>{toggle ? "Hide" :"Show"}</button>

    </div>
  )
}
