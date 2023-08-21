import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  
    function incrementCount() {
      setCount(count + 1)
    }
  
    return (
      <>
        <div>{count}</div>
        <button
          type="button"
          onClick={incrementCount}
        >
          Click me to increase the count
        </button>
      </>
    )    
}