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
  position: relative;
`

export const CartNotification = styled.span`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: var(--yellow-dark);
  color: var(--white);
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 25px;
  display: block;
  height: 1.563rem;
  width: 1.563rem;
  line-height: 170%;
`