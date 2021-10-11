import { IProps } from './types'
import React, { useEffect, useState } from 'react'
import { CardAbout, CardCustom, CardImage, CardLink } from './styles'
import { findPokemon } from 'services'
import { IFindPokemonResponse } from 'services/types'
import { Button, ButtonGroup, Typography } from '@material-ui/core'

export const Card = ({ name }: IProps): JSX.Element => {
  useEffect(() => {
    findPokemon({ name }).then((resp) => setPokemon(resp))
  }, [name])

  const [pokemon, setPokemon] = useState<IFindPokemonResponse>()

  return (
    <CardCustom>
      {pokemon && (
        <>
          <CardImage
            title={pokemon.name}
            image={pokemon.sprites.versions['generation-i']['red-blue'].front_default}
          />
          <CardAbout>
            <Typography>{pokemon.name.toUpperCase()}</Typography>
            <Typography>Altura: {pokemon.height}</Typography>
            <Typography>Peso: {pokemon.weight}</Typography>
          </CardAbout>
          <CardLink>
            <ButtonGroup>
              <Button> Detalhes </Button>
            </ButtonGroup>
          </CardLink>
        </>
      )}
    </CardCustom>
  )
}
