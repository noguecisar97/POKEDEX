import { NextPage } from 'next'
import { Container } from './styles'
import { ListaPokemon } from 'components/ListaPokemon'

const Home: NextPage = (): JSX.Element => {
  return (
    <Container>
      <ListaPokemon />
    </Container>
  )
}

export default Home
