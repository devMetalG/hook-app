import { useFetch } from "../hooks"


export const MultipleCustomHook:React.FC = () => {

  const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/6`);

  return (
    <>
      <h1>Multiple Custom Hook</h1> 
      <hr />
      { isLoading && <p>Loading...</p> }
      <h2> {data?.name} </h2>
    </>
  )
}