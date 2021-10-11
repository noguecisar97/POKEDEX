import LinearProgress from '@material-ui/core/LinearProgress'
import { Container, Contend } from './styles'
import { IProps } from './types'

export const Loading = ({ active }: IProps): JSX.Element => {
  return (
    <Container active={active}>
      <Contend>
        <LinearProgress color="secondary" />
      </Contend>
    </Container>
  )
}
