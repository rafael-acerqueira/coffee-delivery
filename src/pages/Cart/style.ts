import styled from 'styled-components'

export const Container = styled.form`
  margin: 0 auto;
  width: 70rem;
  display: grid;
  justify-items: end;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 2.5rem;
`
export const CartUserInfoTitle = styled.h1`
  font-size: 1.125rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  color: var(--base-subtitle);
`

export const CartAddressBox = styled.div`
  background-color: var(--base-card);
  width: 40rem;
  height: 23.25rem;
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
`

export const CartAddressBoxHeader = styled.header`
  display: flex;
  margin-bottom: 2rem;

`

export const CartAddressBoxHeaderInfo = styled.div`
  margin-left: 0.5rem;
`

export const CartAddressBoxHeaderTitle = styled.h1`
  color: var(--base-subtitle);
  font-size: 1rem;
  font-weight: 200;

`

export const CartAddressBoxHeaderSubtitle = styled.h2`
  color: var(--base-text);
  font-size: 0.875rem;
  font-weight: 200;
  margin-top: 0.125rem;
`

interface CartElementRowProps {
  size: "xs" | "sm" | "md" | "lg" | "xl"
}

const inputSizes = {
  "xs": "3.75rem",
  "sm": "12.5rem",
  "md": "17.25rem",
  "lg": "21.75rem",
  "xl": "35rem"
}

export const CartAddressFormInput = styled.input<CartElementRowProps>`
  background-color: var(--base-input);
  color: var(--base-text);
  height: 2.625rem;
  border: 0;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 0.875rem;
  width: ${props => inputSizes[props.size]};
  margin-bottom: 1rem;

  &:focus {
    border: 1px solid var(--yellow-dark);
  }

  &::placeholder {
    color: var(--base-label);
  }
`

export const CartElementsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const CartPaymentBox = styled.div`
  background-color: var(--base-card);
  width: 40rem;
  height: 12.938rem;
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const PaymentTypesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PaymentTypeItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--base-button);
  border-radius: 6px;
  height: 3.188rem;
  min-width: 11.25rem;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 1rem;

  transition: .5s background-color;

  &:hover {
    background-color: var(--base-hover);
  }
`

export const PaymentTypeRadio = styled.input`
  display: none;

  &:checked + ${PaymentTypeItem} {
    background-color: var(--purple-light);
    border-color: var(--purple);
  }
`

export const PaymentTypeTitle = styled.span`
  color: var(--base-text);
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 80%;
`

export const CartSelectedItems = styled.div`
  background-color: var(--base-card);
  width: 28rem;
  min-height: 31rem;
  border-radius: 0 2.5rem 0 2.5rem;
  padding: 2.5rem;
  margin-top: 1rem;
`

export const CartItem = styled.div`
  border-bottom: 1px solid var(--base-button);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
justify-content: space-between;
`

export const CartItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--base-button);
  color: var(--base-text);
  height: 2.625rem;
  width: 5.7rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  transition: .5s background-color;

  &:hover {
    background-color: var(--base-hover);
  }
`

export const RemoveButtonText = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
`

export const CartCoffeeOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 10.625rem;
`

export const CartCoffeeOptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CartPrice = styled.span`
  color: var(--base-text);
  font-weight: bold;

`

export const CartFooter = styled.div`
  height: 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const CartSummaryPrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartSummaryHighlight = styled.span`
  color: var(--base-subtitle);
  font-size: 1.25rem;
  font-weight: bold;
`

export const CartSummaryCommon = styled.span`
  font-size: 0.875rem;
  color: var(--base-text);
`

export const CartSummaryCommonValue = styled.span`
  color: var(--base-text);
`

export const BuyButton = styled.button`
  background-color: var(--yellow);
  text-transform: uppercase;
  display: block;
  border: 0;
  border-radius: 6px;
  color: var(--white);
  height: 2.875rem;
  width: 100%;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  line-height: 3.4;

  transition: .5s background-color;


  &:hover {
    background-color: var(--yellow-dark);
  }
`