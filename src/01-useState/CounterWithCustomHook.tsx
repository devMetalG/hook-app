import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook:React.FC = () => {

  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Custom Hook: {count} </h1>
      <hr />

      <button onClick={ ()=> increment(2) } className="btn btn-primary"> +1 </button>
      <button onClick={ reset } className="btn btn-primary"> reset </button>
      <button onClick={ ()=> decrement(2) } className="btn btn-primary"> -1 </button>
    </>
  )
}

export default CounterWithCustomHook
