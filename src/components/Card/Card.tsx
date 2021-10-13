import { IProps } from './types'
import React, { useEffect, useState } from 'react'
import { CardAbout, CardCustom, CardImage, CardLink, Text, CardLine } from './styles'
import { ApplicationState } from 'stores'
import { IFindPokemonResponse } from 'services/types'
import { Button, ButtonGroup } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { FindPokemon } from 'stores/ducks/pokemons/action'

export const Card = ({ name }: IProps): JSX.Element => {
  const dispatch = useDispatch()

  const { poke } = useSelector((state: ApplicationState) => {
    return {
      poke: state.pokemons.data.find((e) => e.name === name),
    }
  })

  useEffect(() => {
    if (!poke) {
      dispatch(FindPokemon({ search: name }))
    }
  }, [dispatch, name, poke])

  useEffect(() => {
    if (poke && poke.requestSuccess) {
      setPokemon(poke.details)
    }
  }, [poke])

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
      {!pokemon && <>{/* <Skeleton variant="rect" width={210} height={118} /> */}</>}
    </CardCustom>
  )
}
