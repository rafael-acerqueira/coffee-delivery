import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 70rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 1120px) {
    width: 48rem;
  }

  @media only screen and (max-width: 768px) {
    width: 26.5rem;
  }

`

export const HeaderOptions = styled.div`
  width: 13.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

`