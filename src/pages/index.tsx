import { NextPage } from 'next'
import { Container } from './styles'
import { ListaPokemon } from 'components/ListaPokemon'
import { Loading } from 'components/Loading'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'stores'

const Home: NextPage = (): JSX.Element => {
  const { load } = useSelector((state: ApplicationState) => {
    return {
      load: state.pokemons.loading,
    }
  })

  return (
    <Container>
      <Loading active={load} />
      <ListaPokemon />
    </Container>
  )
}

export default Home
