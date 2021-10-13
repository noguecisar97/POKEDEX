import { ActionTypes, FailPokemonAction, FindPokemonAction, SuccessPokemonAction } from './types'

export const FindPokemon = (payload: Omit<FindPokemonAction, 'type'>): FindPokemonAction => ({
  type: ActionTypes.FIND_POKEMON,
  search: payload.search,
})

export const successPokemon = (
  payload: Omit<SuccessPokemonAction, 'type'>
): SuccessPokemonAction => ({
  type: ActionTypes.SUCCESS_POKEMON,
  result: payload.result,
  pokemon: payload.pokemon,
})

export const failPokemon = (payload: Omit<FailPokemonAction, 'type'>): FailPokemonAction => ({
  type: ActionTypes.FAIL_POKEMON,
  result: payload.result,
  pokemon: payload.pokemon,
})
