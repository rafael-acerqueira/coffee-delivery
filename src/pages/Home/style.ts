import styled from 'styled-components'

export const BannerImage = styled.img`
  width: 100%;
`

export const BannerImageContent = styled.div`
  margin: 0 auto;
  max-width: 70rem;

  @media only screen and (max-width: 1120px) {
    width: 48rem;
  }

  @media only screen and (max-width: 768px) {
    width: 26.5rem;
  }
`

export const CoffeeList = styled.div`
  margin: 0 auto;
  width: 70rem;

  @media only screen and (max-width: 1120px) {
    width: 48rem;
  }

  @media only screen and (max-width: 768px) {
    width: 26.5rem;
  }
`

export const CoffeeHeader = styled.h1`
  font-size: 2rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  margin-bottom: 2.75rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const CoffeeName = styled.h1`
  color: var(--base-subtitle);
  font-size: 1.25rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
  font-weight: bold;
  margin-bottom: .5rem;
`

export const CoffeeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media only screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CoffeeCategory = styled.span`
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  font-size: 0.625rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 12px;
`

export const CoffeeCategoryContainer = styled.div`
  margin-bottom: 1rem;
`

export const CoffeeItem = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: var(--base-card);
  border-radius: 10px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CoffeeItemImage = styled.img`
  margin-top: -1.438rem;
  margin-bottom: 0.75rem;
`

export const CoffeeDescription = styled.p`
  color: var(--base-label);
  text-align: center;
  font-size: 0.875rem;
  padding: 0 1.25rem;
`

export const CoffeePriceSymbol = styled.span`
  color: var(--base-text);
  font-size: 0.875rem;
`

export const CoffeePrice = styled.span`
  color: var(--base-text);
  font-size: 1.5rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
`

export const CoffeeFooterCard = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  width: 13rem;
  margin-top: 2.125rem;
`

export const CoffeeCardAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
