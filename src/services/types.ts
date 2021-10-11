export interface IFindPokemon {
  name: string
}

/**
 * BUSCANDO POKEMONS
 */
export type DataResponsePokemon = {
  count: number
  next: string | null
  previous: string | null
  results: ResultPokeInitial[]
}

type ResultPokeInitial = {
  name: string
  url: string
}

/**
 * Busca de detalhes do pokemon
 */
export interface IFindPokemonResponse {
  abilities: IAbilities[]
  base_experience: number
  forms: IForms[]
  game_indices: IGameIndices[]
  height: number
  held_items: IHeldItems[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: IMoves[]
  name: string
  order: number
  past_types: []
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string
  }
  stats: IStats[]
  types: ITypes[]
  weight: number
}

export interface IAbilities {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface IForms {
  name: string
  url: string
}

export interface IGameIndices {
  game_index: number
  version: {
    name: string
    url: string
  }
}

export interface IHeldItems {
  item: {
    name: string
    url: string
  }
  version_details: IVersionDetails[]
}

export interface IVersionDetails {
  rarity: 50
  version: {
    name: string
    url: string
  }
}

export interface IMoves {
  move: {
    name: string
    url: string
  }
  version_group_details: IVersionGroupDetails[]
}

export interface IVersionGroupDetails {
  level_learned_at: number
  move_learn_method: {
    name: string
    url: string
  }
  version_group: {
    name: string
    url: string
  }
}

export interface IStats {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface ITypes {
  slot: number
  type: {
    name: string
    url: string
  }
}
