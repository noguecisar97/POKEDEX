import allReducers from './ducks'
import rootSaga from './sagas'

import { State as PokemonsState } from './ducks/pokemons/types'

export type ApplicationState = {
  pokemons: PokemonsState
}

export { allReducers, rootSaga }
