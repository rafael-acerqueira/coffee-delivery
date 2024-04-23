import { useEffect, useState } from "react"

import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Trash } from "@phosphor-icons/react"

import {
  CartUserInfoTitle,
  Container,
  CartAddressBox,
  CartAddressBoxHeader,
  CartAddressBoxHeaderInfo,
  CartAddressBoxHeaderTitle,
  CartAddressBoxHeaderSubtitle,
  CartAddressFormInput,
  CartElementsRow,
  CartPaymentBox,
  PaymentTypesBox,
  PaymentTypeItem,
  PaymentTypeTitle,
  PaymentTypeRadio,
  CartSelectedItems,
  CartItem,
  CartItemImage,
  RemoveButton,
  RemoveButtonText,
  CartCoffeeOptions,
  CartCoffeeOptionsBox,
  CartItemWrapper,
  CartPrice,
  CartFooter,
  CartSummaryPrice,
  CartSummaryCommon,
  CartSummaryCommonValue,
  CartSummaryHighlight,
  BuyButton
} from './style'

import { images } from "../Home/images"
import { CoffeeCount } from "../../components/CoffeeCount"

export function Cart() {

  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')


  useEffect(() => {
    let delay = 0
    if (cep) {
      delay = setTimeout(() => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(reponse => reponse.json())
          .then(data => {
            setStreet(data["logradouro"])
            setNeighborhood(data["bairro"])
            setCity(data["localidade"])
            setUf(data["uf"])
          })
      }, 1000)
    }


    return () => clearTimeout(delay)

  }, [cep])


  return (
    <Container>
      <div>
        <CartUserInfoTitle>Complete seu pedido</CartUserInfoTitle>
        <CartAddressBox>
          <CartAddressBoxHeader>
            <MapPin color="#C47F17" size="22" />
            <CartAddressBoxHeaderInfo>
              <CartAddressBoxHeaderTitle>Endereço de Entrega</CartAddressBoxHeaderTitle>
              <CartAddressBoxHeaderSubtitle>Informe o endereço onde deseja receber seu pedido</CartAddressBoxHeaderSubtitle>
            </CartAddressBoxHeaderInfo>
          </CartAddressBoxHeader>
          <form>
            <CartElementsRow>
              <CartAddressFormInput
                value={cep}
                onChange={e => setCep(e.target.value)}
                size='sm'
                placeholder="CEP"
              />
            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput
                size="xl"
                placeholder="Rua"
                onChange={e => setStreet(e.target.value)}
                value={street}
              />
            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput size="sm" placeholder="Número" />
              <CartAddressFormInput size="lg" placeholder="Complemento" />
            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput
                size="sm"
                placeholder="Bairro"
                onChange={e => setNeighborhood(e.target.value)}
                value={neighborhood} />
              <CartAddressFormInput
                size="md"
                placeholder="Cidade"
                onChange={e => setCity(e.target.value)}
                value={city} />
              <CartAddressFormInput
                size="xs"
                placeholder="UF"
                onChange={e => setUf(e.target.value)}
                value={uf} />
            </CartElementsRow>
          </form>
        </CartAddressBox>
        <CartPaymentBox>
          <CartAddressBoxHeader>
            <CurrencyDollar color="#8047F8" size="22" />
            <CartAddressBoxHeaderInfo>
              <CartAddressBoxHeaderTitle>Pagamento</CartAddressBoxHeaderTitle>
              <CartAddressBoxHeaderSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CartAddressBoxHeaderSubtitle>
            </CartAddressBoxHeaderInfo>
          </CartAddressBoxHeader>
          <PaymentTypesBox>
            <PaymentTypeRadio type="radio" name="payment-type-box" id="credit-card" value="credit-card" />
            <PaymentTypeItem htmlFor="credit-card">
              <CreditCard color="#8047F8" size="16" />
              <PaymentTypeTitle>Cartão de crédito</PaymentTypeTitle>
            </PaymentTypeItem>
            <PaymentTypeRadio type="radio" name="payment-type-box" id="debit-card" value="debit-card" />
            <PaymentTypeItem htmlFor="debit-card">
              <Bank color="#8047F8" size="16" />
              <PaymentTypeTitle>Cartão de débito</PaymentTypeTitle>
            </PaymentTypeItem>
            <PaymentTypeRadio type="radio" name="payment-type-box" id="cash" value="cash" />
            <PaymentTypeItem htmlFor="cash">
              <Money color="#8047F8" size="16" />
              <PaymentTypeTitle>Dinheiro</PaymentTypeTitle>
            </PaymentTypeItem>
          </PaymentTypesBox>
        </CartPaymentBox>
      </div>
      <div>
        <CartUserInfoTitle>Cafés selecionados</CartUserInfoTitle>
        <CartSelectedItems>
          <CartItem>
            <CartItemWrapper>
              <CartItemImage src={images["image-1"]} alt="" />
              <CartCoffeeOptionsBox>
                <span>Expresso Tradicional</span>
                <CartCoffeeOptions>
                  <CoffeeCount />
                  <RemoveButton>
                    <Trash color="#8047F8" size="16" />
                    <RemoveButtonText>Remover</RemoveButtonText>
                  </RemoveButton>
                </CartCoffeeOptions>
              </CartCoffeeOptionsBox>
            </CartItemWrapper>
            <CartPrice>R$9,90</CartPrice>
          </CartItem>
          <CartItem>
            <CartItemWrapper>
              <CartItemImage src={images["image-2"]} alt="" />
              <CartCoffeeOptionsBox>
                <span>Latte</span>
                <CartCoffeeOptions>
                  <CoffeeCount />
                  <RemoveButton>
                    <Trash color="#8047F8" size="16" />
                    <RemoveButtonText>Remover</RemoveButtonText>
                  </RemoveButton>
                </CartCoffeeOptions>
              </CartCoffeeOptionsBox>
            </CartItemWrapper>
            <CartPrice>R$19,80</CartPrice>
          </CartItem>

          <CartFooter>
            <CartSummaryPrice>
              <CartSummaryCommon>Total de itens</CartSummaryCommon>
              <CartSummaryCommonValue>R$29,70</CartSummaryCommonValue>
            </CartSummaryPrice>
            <CartSummaryPrice>
              <CartSummaryCommon>Entrega</CartSummaryCommon>
              <CartSummaryCommonValue>R$3,50</CartSummaryCommonValue>
            </CartSummaryPrice>
            <CartSummaryPrice>
              <CartSummaryHighlight>Total</CartSummaryHighlight>
              <CartSummaryHighlight>R$33,20</CartSummaryHighlight>
            </CartSummaryPrice>
          </CartFooter>
          <BuyButton>Confirmar Pedido</BuyButton>
        </CartSelectedItems>
      </div>
    </Container>
  )
}