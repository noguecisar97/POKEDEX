import { IProps } from './types'
import React, { useEffect, useState } from 'react'
import { CardAbout, CardCustom, CardImage, CardLink, Text, CardLine } from './styles'
import { findPokemon } from 'services'
import { IFindPokemonResponse } from 'services/types'
import { Button, ButtonGroup } from '@material-ui/core'

export const Card = ({ name }: IProps): JSX.Element => {
  useEffect(() => {
    findPokemon({ name }).then((resp) => setPokemon(resp))
  }, [name])

  const [pokemon, setPokemon] = useState<IFindPokemonResponse>()

  return (
    <CardCustom>
      {pokemon && (
        <CardLine>
          <CardImage
            title={pokemon.name}
            image={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
          />
          <CardAbout>
            <Text>{pokemon.name.toUpperCase().replace('-', ' ')}</Text>
            <Text>Altura: {pokemon.height}</Text>
            <Text>Peso: {pokemon.weight}</Text>
          </CardAbout>
        </CardLine>
      )}
      {pokemon && (
        <CardLink>
          <ButtonGroup>
            <Button> Detalhes </Button>
          </ButtonGroup>
        </CardLink>
      )}
    </CardCustom>
  )
}
