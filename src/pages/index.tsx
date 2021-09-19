import { NextPage } from 'next'
import { Titulo, Container } from './styles'
import Loading from 'components/Loading'
import ListaPokemon from 'components/ListaPokemon'

const Home: NextPage = (): JSX.Element => {
  return (
    <Container>
      <Loading />
      <Titulo>Pokedex</Titulo>
      <ListaPokemon />
    </Container>
  )
}

export default Home
