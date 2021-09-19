import { useEffect, useState } from 'react'
import axios from 'axios'
import type { DataResponsePokemon } from './types'

const ListaPokemon = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<DataResponsePokemon>()

  useEffect(() => {
    const pokes = async (): Promise<void> => {
      await axios
        .get<DataResponsePokemon>('/api/pokemon')
        .then(({ data }) => {
          setPokemons(data)
        })
        .catch(() => {
          setPokemons({} as DataResponsePokemon)
        })
    }
    pokes()
  }, [])

  return (
    <div>
      <ul>{pokemons && pokemons.results[0].name}</ul>
    </div>
  )
}

export default ListaPokemon
