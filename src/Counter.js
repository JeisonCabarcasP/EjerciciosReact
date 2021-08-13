import React, { useState } from 'react'

export default function Counter() {
    const [cont,setCount]=useState(5)


    return (
        <div>
            <div>
                <button onClick={()=>setCount(cont-1)}>-</button>
            </div>
            <h5>
                la cuenta es {cont}
            </h5>
            <div>
                <button onClick={()=>setCount(cont+1)}>+</button>
            </div>
            <div>
                <button onClick={()=>setCount(5)}>reset</button>
            </div>
        </div>
    )
}
