export type DataResponsePokemon = {
  count: number
  next: string | null
  previous: string | null
  results: ResultPokeInitial[]
}

export type ResultPokeInitial = {
  name: string
  url: string
}
