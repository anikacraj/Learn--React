
import React, {useState} from 'react'

export default function Index2() {
    const [count ,setCount] =useState(0)
    const handleIncrement=()=>{
setCount((count)=>count +1);
// setCount((count)=>count +1);
// setCount((count)=>count +1);
    }

    const handleDecrement=()=>{
        setCount((count)=> count - 1);
            }
            const handleReset=()=>{
                setCount((count)=> count = 0 )
            }

  return (
    <div>
<h1>Count :{count}</h1>
<button  onClick={handleIncrement} disabled={count===5 ? true :false}>Increment  </button>
<button  onClick={handleDecrement}  disabled={count===-5 ? true :false}>Decrement </button>
<button  onClick={handleReset}>Reset </button>

    </div>
  )
}
