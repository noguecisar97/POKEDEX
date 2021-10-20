/* eslint-disable max-len */
import { IProps } from './types'
import React, { useEffect, useState } from 'react'
import { CardAbout, CardCustom, CardImage, CardLink, Text, CardLine, CardHeader } from './styles'
import { ApplicationState } from 'stores'
import { IFindPokemonResponse } from 'services/types'
import { Button, ButtonGroup, Select, MenuItem } from '@material-ui/core'
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
      setImagem(poke.details.sprites.versions['generation-v']['black-white'].animated.front_default)
    }
  }, [poke])

  const [pokemon, setPokemon] = useState<IFindPokemonResponse>()
  const [imagem, setImagem] = useState<string>()

  const [generation, setGeneration] = useState<string>('generation-v')

  const handleSelect = (
    e: React.ChangeEvent<{
      name?: string | undefined
      value: unknown
    }>
  ): void => {
    setGeneration(e.target.value as string)
  }

  return (
    <CardCustom>
      {pokemon && (
        <>
          <CardHeader>
            <Button
              onClick={() => {
                setImagem(
                  pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                )
              }}
              variant="outlined"
            >
              Normal
            </Button>

            {pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny && (
              <Button
                onClick={() => {
                  setImagem(
                    pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny
                  )
                }}
                variant="outlined"
              >
                Shiny
              </Button>
            )}
          </CardHeader>

          <CardLine>
            <CardImage title={pokemon.name} image={imagem} />
            <CardAbout>
              <Text>{pokemon.name.toUpperCase().replace('-', ' ')}</Text>
              <Text>Altura: {pokemon.height}</Text>
              <Text>Peso: {pokemon.weight}</Text>
            </CardAbout>
          </CardLine>

          <CardLink>
            <ButtonGroup variant="text">
              <Button> Detalhes </Button>
            </ButtonGroup>
            <Select
              id={`select-generation-${pokemon.name}`}
              onChange={handleSelect}
              variant="standard"
              value={generation}
              label="Geracao"
            >
              {Object.keys(pokemon.sprites.versions).map((e) => (
                <MenuItem button key={e} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </CardLink>
        </>
      )}
    </CardCustom>
  )
}
