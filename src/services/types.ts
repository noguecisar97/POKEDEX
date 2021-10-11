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
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: null | string
    front_default: string
    front_female: null | string
    front_shiny: string | null
    front_shiny_female: null | string
    other: {
      dream_world: {
        front_default: string
        front_female: null | string
      }

      'official-artwork': {
        front_default: string
      }
    }
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string
          back_gray: string | null
          front_default: string
          front_gray: string | null
        }
        yellow: {
          back_default: string
          back_gray: string | null
          front_default: string
          front_gray: string | null
        }
      }
      'generation-ii': {
        crystal: {
          back_default: string
          back_shiny: string | null
          front_default: string
          front_shiny: string | null
        }
        gold: {
          back_default: string
          back_shiny: string | null
          front_default: string
          front_shiny: string | null
        }
        silver: {
          back_default: string
          back_shiny: string | null
          front_default: string
          front_shiny: string | null
        }
      }
      'generation-iii': {
        emerald: {
          front_default: string
          front_shiny: string | null
        }
        'firered-leafgreen': {
          back_default: string
          back_shiny: null | string
          front_default: string
          front_shiny: null | string
        }
        'ruby-sapphire': {
          back_default: string
          back_shiny: null | string
          front_default: string
          front_shiny: null | string
        }
      }
      'generation-iv': {
        'diamond-pearl': {
          back_default: string
          back_female: null | string
          back_shiny: null | string
          back_shiny_female: null | string
          front_default: string
          front_female: null | string
          front_shiny: null | string
          front_shiny_female: null | string
        }
        'hearthgold-soulsilver': {
          back_default: string
          back_female: null | string
          back_shiny: string
          back_shiny_female: null | string
          front_default: string
          front_female: null | string
          front_shiny: string
          front_shiny_female: null | string
        }
        platinum: {
          back_default: string
          back_female: null | string
          back_shiny: string
          back_shiny_female: null | string
          front_default: string
          front_female: null | string
          front_shiny: string
          front_shiny_female: null | string
        }
      }
      'generation-v': {
        'black-white': {
          animated: {
            back_default: string
            back_female: string | null
            back_shiny_female: null | string
            front_default: string
            front_female: string | null
            back_shiny: string
            front_shiny: string
            front_shiny_female: string | null
          }
          back_default: string
          back_female: string | null
          back_shiny_female: null | string
          front_default: string
          front_female: string | null
          back_shiny: string
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
        'x-y': {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      'generation-vii': {
        icons: {
          front_default: string
          front_female: null | string
        }
        'ultra-sun-ultra-moon': {
          front_default: string
          front_female: string | null
          front_shiny: string
          front_shiny_female: string | null
        }
      }
      'generation-viii': {
        icons: {
          front_default: string
          front_female: null | string
        }
      }
    }
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
