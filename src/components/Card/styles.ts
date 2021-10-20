import { Card, CardActions, CardContent, CardMedia, CardMediaProps } from '@material-ui/core'
import styled from 'styled-components'

export const CardCustom = styled(Card)`
  width: 390px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.fourth};
`

export const CardImage = styled(CardMedia)<CardMediaProps>`
  width: 125px;
  height: 120px;
  padding: 15px;

  && {
    background-size: auto;
  }
`

export const CardAbout = styled(CardContent)`
  width: 100px;
`

export const CardLink = styled(CardActions)`
  width: 100px;
  padding: 10px;
`

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`
export const CardLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 130px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 5px;
`
