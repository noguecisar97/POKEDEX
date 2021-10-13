import { all } from 'redux-saga/effects'
import PokemonSagas from './sagas/pokemons'
import { AllEffect, ForkEffect } from 'redux-saga/effects'

export default function* root(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([...PokemonSagas])
}
