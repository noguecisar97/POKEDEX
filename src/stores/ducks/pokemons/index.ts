import { IFindPokemonResponse } from 'services/types'
import {
  ActionArgs,
  ActionTypes,
  FailPokemonAction,
  FindPokemonAction,
  IPokemon,
  State,
  SuccessPokemonAction,
} from './types'

export const INITIAL_STATE: State = {
  data: [],
  count: 0,
  loading: false,
  lastSearch: '',
}

export function find(state: State, action: FindPokemonAction): State {
  return { ...state, loading: true, lastSearch: action.search }
}

export function success(state: State, action: SuccessPokemonAction): State {
  const poke: IPokemon = {
    name: action.pokemon.name,
    requestSuccess: action.result,
    details: action.pokemon,
  }

  const exist = state.data.find((e) => e.name === action.pokemon.name)
  const newData = exist ? state.data : state.data.concat(poke)

  return { ...state, count: newData.length, loading: false, data: newData }
}

export function fail(state: State, action: FailPokemonAction): State {
  const poke: IPokemon = {
    name: action.pokemon,
    requestSuccess: action.result,
    details: {} as IFindPokemonResponse,
  }

  const exist = state.data.find((e) => e.name === action.pokemon)
  const newData = exist ? state.data : state.data.concat(poke)

  return { ...state, count: newData.length, loading: false, data: newData }
}

const reducer = (state: State = INITIAL_STATE, action: ActionArgs): State => {
  if (ActionTypes.FIND_POKEMON === action.type) {
    return find(state, action)
  }

  if (ActionTypes.SUCCESS_POKEMON === action.type) {
    return success(state, action)
  }

  if (ActionTypes.FAIL_POKEMON === action.type) {
    return fail(state, action)
  }

  return state
}

export default reducer
