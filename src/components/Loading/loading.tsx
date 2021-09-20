import LinearProgress from '@material-ui/core/LinearProgress'
import { Container, Contend } from './styles'

export const Loading = (): JSX.Element => {
  return (
    <Container>
      <Contend>
        <LinearProgress color="secondary" />
      </Contend>
    </Container>
  )
}
