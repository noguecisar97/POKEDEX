import styled from 'styled-components'

export const Titulo = styled.h1`
  text-align: center;
  width: 100%;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.secondary};
`
export const Container = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`
