import { useState } from "react"

export default function Counter(){
    const [Count, setCount] = useState(0)

    const hendleAdd = ()=>{
        const newCount = Count + 1;
        setCount(newCount);
    }

    const hendleRemove = ()=>{
        const newCount = Count - 1;
        setCount(newCount);
    }

    return (
        <div>
            <h2>Count: {Count}</h2>
            <button onClick={hendleAdd}>Add</button>
            <button onClick={hendleRemove}>Reomve</button>
        </div>
    )
}