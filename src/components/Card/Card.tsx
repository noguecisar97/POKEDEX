import { IProps } from './types'
import React, { useEffect, useState } from 'react'
import { CardAbout, CardCustom, CardImage, CardLink } from './styles'
import { findPokemon } from 'services'
import { IFindPokemonResponse } from 'services/types'

export const Card = ({ name }: IProps): JSX.Element => {
  useEffect(() => {
    findPokemon({ name }).then((resp) => setPokemon(resp))
  }, [name])

  const [pokemon, setPokemon] = useState<IFindPokemonResponse>()

  return (
    <CardCustom>
      {pokemon && (
        <>
          <CardImage title={pokemon.name} image={pokemon.sprites.back_default} />
          <CardAbout></CardAbout>
          <CardLink></CardLink>
        </>
      )}
    </CardCustom>
  )
}
