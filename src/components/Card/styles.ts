import { Card, CardActions, CardContent, CardMedia, CardMediaProps } from '@material-ui/core'
import styled from 'styled-components'

export const CardCustom = styled(Card)`
  width: 345px;
`

export const CardImage = styled(CardMedia)<CardMediaProps>`
  height: 50px;
  width: 50px;
`

export const CardAbout = styled(CardContent)``

export const CardLink = styled(CardActions)``
