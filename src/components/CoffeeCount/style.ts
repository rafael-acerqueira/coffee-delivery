import styled from 'styled-components'

export const Container = styled.div`
  width: 4.5rem;
  height: 2.625rem;
  background-color: var(--base-button);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: unset;
  }

  svg {
    cursor: pointer;
  }

  &:hover {
    fill: #4B2995
  }
`

export const CoffeeQuantity = styled.input`
  color: var(--base-title);
  width: 1.5rem;
  border: 0;
  background-color: var(--base-button);
  text-align: center;
`