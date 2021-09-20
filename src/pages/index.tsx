import { NextPage } from 'next'
import { Container } from './styles'
import { Loading } from 'components/Loading'
import ListaPokemon from 'components/ListaPokemon'
import { Header } from 'components/Header'

const Home: NextPage = (): JSX.Element => {
  return (
    <Container>
      <Loading />
      <Header />
      <ListaPokemon />
    </Container>
  )
}

export default Home
