import { useState } from "react"

const CounterApp = () => {

  const [state, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const { counter1, counter2, counter3 } = state;

  const handleCount= () => {
    setCount({
      ...state,
      counter1: counter1 + 1,
    })
  }

  return (
    <>
      <h1>Counter: { counter1 } </h1>
      <h1>Counter: { counter2 } </h1>
      <h1>Counter: { counter3 } </h1>
      <hr />
      <button className="btn" onClick={handleCount}>+1</button>
    </>
  )
}

export default CounterApp
