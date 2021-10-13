import { takeEvery, call, put } from 'redux-saga/effects'

import { findPokemon } from 'services'
import { IFindPokemonResponse } from 'services/types'
import {
  ActionTypes,
  FailPokemonAction,
  FindPokemonAction,
  SuccessPokemonAction,
} from 'stores/ducks/pokemons/types'
import { failPokemon, successPokemon } from 'stores/ducks/pokemons/action'
import { CallEffect, PutEffect } from 'redux-saga/effects'

export function* findNewPokemon(
  payload: FindPokemonAction
): Generator<
  CallEffect<IFindPokemonResponse> | PutEffect<SuccessPokemonAction> | PutEffect<FailPokemonAction>,
  void,
  IFindPokemonResponse
> {
  const { search } = payload

  try {
    const responsePokemon: IFindPokemonResponse = yield call(() => findPokemon({ name: search }))

    yield put(successPokemon({ pokemon: responsePokemon, result: true }))
  } catch (err) {
    yield put(failPokemon({ pokemon: search, result: false }))
  }
}

const pokemonSagas = [takeEvery(ActionTypes.FIND_POKEMON, findNewPokemon)]

export default pokemonSagas
