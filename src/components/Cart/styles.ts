import styled from "styled-components"

interface Props {
  background: string
}

export const CartContainer = styled.button<Props>`
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.background};
  padding: 0.5rem;
  cursor: pointer;
`