import { MapPin } from "@phosphor-icons/react"
import { CityCardContainer, CityCardInfo } from "./style"

export function CityCard() {
  return (
    <CityCardContainer>
      <MapPin color="#8047F8" size={22} weight="fill" />
      <CityCardInfo>Porto Alegre, RS</CityCardInfo>
    </CityCardContainer>
  )
}