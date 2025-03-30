import React, { useLayoutEffect, useRef } from 'react'

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

  const h2Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (h2Ref.current) {
      const { width, height } = h2Ref.current.getBoundingClientRect();
      console.log(`Width: ${width}, Height: ${height}`);
    }
  }, [name]);

  return (
    <section>
      <h2 ref={h2Ref} className='text-capitalize'>#{id} - {name} </h2>
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

