import { useEffect, useState } from 'react'
import { requestPokemons } from 'services'
import type { ResultPokeInitial } from './types'

const ListaPokemon = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<ResultPokeInitial[]>([])

  useEffect(() => {
    requestPokemons().then((data) => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <div>
      {pokemons.map((e) => (
        <p key={e.name}> {e.name} </p>
      ))}
    </div>
  )
}

export default ListaPokemon
