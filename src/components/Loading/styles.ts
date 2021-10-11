import styled from 'styled-components'
import { IContainer } from './types'

export const Container = styled.div<IContainer>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  background-color: #000;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
`

export const Contend = styled.div`
  width: 100%;
`
