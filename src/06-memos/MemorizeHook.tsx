import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'

const heavyStuff= (value: number):number => {
  for (let i = 0; i < value; i++) {
    console.log('Print')
    
  }
  return value;
} 

export const MemoHook:React.FC = () => {

  const {count, increment} = useCounter(9);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(()=> heavyStuff(count), [count])

  return (
    <>
      <h1>Counter: <small>{count}</small> </h1>
      <hr />
      <h4> {memorizedValue} </h4>
      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow(!show) }
      >
        {JSON.stringify(show)}
      </button>
    </>
  )
}