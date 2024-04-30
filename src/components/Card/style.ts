import styled from 'styled-components'


export const Name = styled.h1`
  color: var(--base-subtitle);
  font-size: 1.25rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
  font-weight: bold;
  margin-bottom: .5rem;
`

export const Category = styled.span`
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 12px;
`

export const Item = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: var(--base-card);
  border-radius: 10px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemImage = styled.img`
  margin-top: -1.438rem;
  margin-bottom: 0.75rem;
`

export const CategoryContainer = styled.div`
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: var(--base-label);
  text-align: center;
  font-size: 0.875rem;
  padding: 0 1.25rem;
`

export const PriceSymbol = styled.span`
  color: var(--base-text);
  font-size: 0.875rem;
`

export const Price = styled.span`
  color: var(--base-text);
  font-size: 1.5rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
`

export const FooterCard = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  width: 13rem;
  margin-top: 2.125rem;
`

export const CardAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`