import { useContext } from "react"

import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom';

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

import { CoffeeCount } from "../../components/CoffeeCount"
import { CartContext } from "../../contexts/CartContext"

export function Cart() {
  const {
    coffees,
    increaseQuantity,
    decreaseQuantity,
    removeCoffee,
    updateDeliveryAddress,
    clearCart
  } = useContext(CartContext)

  const {
    register,
    handleSubmit
  } = useForm()


  const navigate = useNavigate()

  function handleCheckout(data) {
    updateDeliveryAddress(data)
    navigate('/delivery')
    clearCart()
  }


  const totalItemsPrice = coffees.reduce((previous, current) => {
    return previous += current.price * current.quantity
  }, 0)

  const deliveryFee = 3.5

  const totalPrice = totalItemsPrice + deliveryFee


  return (
    <Container onSubmit={handleSubmit(handleCheckout)}>
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
          <div>
            <CartElementsRow>
              <CartAddressFormInput
                size='sm'
                placeholder="CEP"
                {...register('cep')}
              />
            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput
                size="xl"
                placeholder="Rua"
                {...register('street')}
              />

            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput size="sm" placeholder="Número" {...register('number')} />
              <CartAddressFormInput size="lg" placeholder="Complemento" {...register('complement')} />
            </CartElementsRow>
            <CartElementsRow>
              <CartAddressFormInput
                size="sm"
                placeholder="Bairro"
                {...register('neighborhood')}
              />

              <CartAddressFormInput
                size="md"
                placeholder="Cidade"
                {...register('city')}
              />

              <CartAddressFormInput
                size="xs"
                placeholder="UF"
                {...register('uf')}
              />
            </CartElementsRow>
          </div>
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
            <PaymentTypeRadio type="radio" {...register('payment_type')} id="credit-card" value="credit-card" />
            <PaymentTypeItem htmlFor="credit-card">
              <CreditCard color="#8047F8" size="16" />
              <PaymentTypeTitle>Cartão de crédito</PaymentTypeTitle>
            </PaymentTypeItem>
            <PaymentTypeRadio type="radio" {...register('payment_type')} id="debit-card" value="debit-card" />
            <PaymentTypeItem htmlFor="debit-card">
              <Bank color="#8047F8" size="16" />
              <PaymentTypeTitle>Cartão de débito</PaymentTypeTitle>
            </PaymentTypeItem>
            <PaymentTypeRadio type="radio" {...register('payment_type')} id="cash" value="cash" />
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
          {
            coffees.map(coffee => (
              <CartItem key={coffee.id}>
                <CartItemWrapper>
                  <CartItemImage src={coffee.image} alt="" />
                  <CartCoffeeOptionsBox>
                    <span>{coffee.name}</span>
                    <CartCoffeeOptions>
                      <CoffeeCount
                        quantity={coffee.quantity}
                        increaseCoffee={() => increaseQuantity(coffee.id)}
                        decreaseCoffee={() => decreaseQuantity(coffee.id)}
                      />
                      <RemoveButton onClick={() => removeCoffee(coffee.id)}>
                        <Trash color="#8047F8" size="16" />
                        <RemoveButtonText>Remover</RemoveButtonText>
                      </RemoveButton>
                    </CartCoffeeOptions>
                  </CartCoffeeOptionsBox>
                </CartItemWrapper>
                <CartPrice>
                  {
                    (coffee.price * coffee.quantity).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2
                      }
                    )
                  }
                </CartPrice>
              </CartItem>
            ))
          }

          <CartFooter>
            <CartSummaryPrice>
              <CartSummaryCommon>Total de itens</CartSummaryCommon>
              <CartSummaryCommonValue>
                {
                  totalItemsPrice.toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2
                    }
                  )
                }
              </CartSummaryCommonValue>
            </CartSummaryPrice>
            <CartSummaryPrice>
              <CartSummaryCommon>Entrega</CartSummaryCommon>
              <CartSummaryCommonValue>
                {
                  deliveryFee.toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2
                    }
                  )
                }
              </CartSummaryCommonValue>
            </CartSummaryPrice>
            <CartSummaryPrice>
              <CartSummaryHighlight>Total</CartSummaryHighlight>
              <CartSummaryHighlight>
                {
                  totalPrice.toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2
                    }
                  )
                }
              </CartSummaryHighlight>
            </CartSummaryPrice>
          </CartFooter>
          <BuyButton type="submit">Confirmar Pedido</BuyButton>
        </CartSelectedItems>
      </div>
    </Container>
  )
}