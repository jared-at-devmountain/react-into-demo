import { useState } from 'react'
import './Counter.css'

export default function Counter(props) {

    const [count, setCount] = useState(props.initialValue)
  
    function incrementCount() {
      setCount(count + 1)
    }

    function resetCount() {
        setCount(props.initialValue)
    }
  
    return (
      <div className="counter">
        <div>{count}</div>
        <button
          type="button"
          onClick={incrementCount}
        >
          Click me to increase the count
        </button>
        <button
            type="button"
            onClick={resetCount}
        >
            Reset Count
        </button>
      </div>
    )    
}