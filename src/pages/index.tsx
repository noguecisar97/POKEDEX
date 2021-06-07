import { NextPage } from 'next'
import { Titulo } from './styles'
import Loading from 'components/Loading'

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Loading />
      <Titulo>Pokedex</Titulo>
    </div>
  )
}

export default Home
