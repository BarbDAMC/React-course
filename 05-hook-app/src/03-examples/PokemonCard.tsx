import { useLayoutEffect, useRef, useState } from 'react';

interface PokemonCardInterface {
  id: number,
  name: string,
  sprites: string[]
}

export const PokemonCard = ({id, name, sprites = []}: PokemonCardInterface) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    const {height, width} = h2Ref.current!.getBoundingClientRect();
    setBoxSize({height, width});
    
  }, [name])

  return (
    <section
      style={{ height: 200, display: 'flex', flexDirection: 'row' }}
    >
      <h2 ref={h2Ref} className="text-capitalize"># {id} - {name}</h2>

      
      <div>
        {sprites.map((sprite) => (
          <img src={sprite} />
        ))}
      </div>

      <div>
        {JSON.stringify(boxSize, null, 2)}
      </div>
      

    </section>
  )
}
