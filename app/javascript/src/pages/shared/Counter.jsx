import * as React from 'react'

export const Counter = () => {
  const [count, setCount] = React.useState(0)
  return <div>
    <div>Count: {count}</div>
    <button onClick={() => {setCount(count + 1)}}>Increment count</button>
  </div>
}
