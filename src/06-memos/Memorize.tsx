import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize:React.FC = () => {

  const {count, increment} = useCounter(9);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter: <Small value= {count} /> </h1>
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