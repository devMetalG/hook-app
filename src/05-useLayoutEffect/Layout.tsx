import { useCounter, useFetch } from '../hooks'
import { LoadingMessage, PokemonCard } from '../03-examples';


export const Layout:React.FC = () => {

  const {count, increment, decrement} = useCounter(1);
  const {data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`);

  return (
    <>
      <h1>Multiple Custom Hook</h1> 
      <hr />
      { 
        isLoading
          ? <LoadingMessage/>
          : data ? (
            <PokemonCard 
              id= {count} 
              name= {data.name} 
              sprites={[
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny,
              ]}
            />
          ) : (
            <p>Data not found.</p>
          )
      }

      <button
        className="btn btn-primary mt-2"
        onClick={() => (count > 1) && decrement(1)}
      >
        prev
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => increment(1)}
      >
        next
      </button>
    </>
  )
}