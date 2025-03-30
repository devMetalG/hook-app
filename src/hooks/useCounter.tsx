import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  
  const [count, setCount] = useState(initialValue);

  const increment = (value:number = 1) => {
    setCount(count + value)
  }
  const decrement = (value:number = 1) => {
    if(count === 0 ) return;
    setCount(count - value)
  }
  const reset = () => {
    setCount(initialValue)
  }
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}