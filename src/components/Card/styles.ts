import { Card, CardActions, CardContent, CardMedia, CardMediaProps } from '@material-ui/core'
import styled from 'styled-components'

export const CardCustom = styled(Card)`
  width: 345px;

  display: flex;
`

export const CardImage = styled(CardMedia)<CardMediaProps>`
  width: 120px;

  padding: 5px;
`

export const CardAbout = styled(CardContent)``

export const CardLink = styled(CardActions)``
