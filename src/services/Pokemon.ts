import axios from 'axios'
import { DataResponsePokemon, IFindPokemonResponse } from './types'
import { IFindPokemon } from './types'

export const requestPokemons = async (): Promise<DataResponsePokemon> => {
  const { data } = await axios.get<DataResponsePokemon>('/api/pokemon')

  return data
}

export const findPokemon = async ({ name }: IFindPokemon): Promise<IFindPokemonResponse> => {
  const { data } = await axios.get<IFindPokemonResponse>(`api/pokemon/${name}`)

  return data
}
