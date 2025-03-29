import React from 'react'

interface PokemonCardProps {
  name: string,
  id: number,
  sprites: Sprites
}

type Sprites = [
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string,
];

export const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, sprites }) => {
  return (
    <section>
      <h2 className='text-capitalize'>#{id} - {name} </h2>
      <div>
        {
          sprites.map(sprite => (
            <img  key={sprite} src={sprite} alt="" />
          ))
        }
      </div>
    </section>
  )
}

