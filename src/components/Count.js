import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count => count+1)
    }
    function decrease() {
        setCount(count => count-1)
    }

    return (
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <p>{count} is a {count>0 ? "positive": count<0? "negative": "neutral"} number</p>
        </div>
    )
}