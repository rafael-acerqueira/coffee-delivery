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