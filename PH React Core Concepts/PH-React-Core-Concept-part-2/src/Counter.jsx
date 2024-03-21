import { useState } from "react"

export default function Counter(){
    const [Count, setCount] = useState(0)

    const countStyle = {
        border : '2px solid red',
        padding : '15px',
        margin: '10px'
    }

    const hendleAdd = ()=>{
        const newCount = Count + 1;
        setCount(newCount);
    }

    const hendleRemove = ()=>{
        const newCount = Count - 1;
        setCount(newCount);
    }

    return (
        <div style={countStyle}>
            <h2>Count: {Count}</h2>
            <button onClick={hendleAdd}>Add</button>
            <button onClick={hendleRemove}>Reomve</button>
        </div>
    )
}