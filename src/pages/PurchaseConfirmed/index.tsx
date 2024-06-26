import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
  DeveliryWrapper,
  DeliveryWrapperTitle,
  DeliveryWrapperSubtitle,
  DeliveryInfoBox,
  DeliveryIconContainer,
  DeliveryInfo,
  DeliveryInfoBoxItem
} from './style'

import delivery from '../../assets/images/delivery.png'



export function PurchaseConfirmed() {

  const { deliveryAddress } = useContext(CartContext)

  return (
    <DeveliryWrapper>
      <div>
        <div>
          <DeliveryWrapperTitle>Uhu! Pedido confirmado</DeliveryWrapperTitle>
          <DeliveryWrapperSubtitle>Agora é só aguardar que logo o café chegará até você</DeliveryWrapperSubtitle>
        </div>
        <DeliveryInfoBox>
          <DeliveryInfoBoxItem>
            <DeliveryIconContainer iconType="localization">
              <MapPin weight='fill' color="#fff" size="16" />
            </DeliveryIconContainer>
            <DeliveryInfo>
              <span>Entrega em <strong>{deliveryAddress.street}, {deliveryAddress.number}</strong></span>
              <span>{deliveryAddress.neighboorhood} - {deliveryAddress.city}, {deliveryAddress.uf}</span>
            </DeliveryInfo>
          </DeliveryInfoBoxItem>

          <DeliveryInfoBoxItem>
            <DeliveryIconContainer iconType="deliveryTime">
              <Timer weight='fill' color="#fff" size="16" />
            </DeliveryIconContainer>
            <DeliveryInfo>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </DeliveryInfo>
          </DeliveryInfoBoxItem>

          <DeliveryInfoBoxItem>
            <DeliveryIconContainer iconType="payment">
              <CurrencyDollar weight='fill' color="#fff" size="16" />
            </DeliveryIconContainer>
            <DeliveryInfo>
              <span>Pagamento na entrega</span>
              <strong>{deliveryAddress.payment_type}</strong>
            </DeliveryInfo>
          </DeliveryInfoBoxItem>
        </DeliveryInfoBox>
      </div>
      <img src={delivery} alt="" />
    </DeveliryWrapper>
  )
}