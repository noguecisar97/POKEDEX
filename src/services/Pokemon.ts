import axios from 'axios'
import { DataResponsePokemon } from 'pages/api/pokemon/types'

export const requestPokemons = async (): Promise<DataResponsePokemon> => {
  const { data } = await axios.get<DataResponsePokemon>('/api/pokemon')

  return data
}
