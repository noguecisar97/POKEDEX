import { Card } from 'components/Card'
import { useEffect, useState } from 'react'
import { requestPokemons } from 'services'
import { Container } from './styles'
import type { ResultPokeInitial } from './types'

export const ListaPokemon = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<ResultPokeInitial[]>([])

  useEffect(() => {
    requestPokemons().then((data) => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <Container>
      {pokemons.map((e) => (
        <Card name={e.name} key={e.name} />
      ))}
    </Container>
  )
}
