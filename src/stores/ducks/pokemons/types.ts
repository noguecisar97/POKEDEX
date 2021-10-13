import { IFindPokemonResponse } from 'services/types'
import { Action } from 'redux'

export type State = {
  data: IPokemon[]
  count: number
  lastSearch: string
  loading: boolean
}

export type IPokemon = {
  name: string
  requestSuccess: boolean
  details: IFindPokemonResponse
}

/**
 * ACTIONS
 */

export enum ActionTypes {
  FIND_POKEMON = '@POKEMON/FIND',
  SUCCESS_POKEMON = '@POKEMON/SUCCESS',
  FAIL_POKEMON = '@POKEMON/FAIL',
}

export type FindPokemonAction = Action<ActionTypes.FIND_POKEMON> & {
  search: string
}

export type SuccessPokemonAction = Action<ActionTypes.SUCCESS_POKEMON> & {
  result: boolean
  pokemon: IFindPokemonResponse
}

export type FailPokemonAction = Action<ActionTypes.FAIL_POKEMON> & {
  result: boolean
  pokemon: string
}

export type ActionArgs = FindPokemonAction | SuccessPokemonAction | FailPokemonAction
