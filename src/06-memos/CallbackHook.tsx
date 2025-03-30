import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook:React.FC = () => {
  
  const [count, setCount] = useState(0);

  const incrementFather = useCallback(
    (value:number) => {
      setCount((count) => count + value );
  }, []);

  // const increment = () => {
  //   setCount(count + 1);
  // }

  return (
    <>
      <h1>useCallback Hook: {count} </h1> 
      <hr />
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}

