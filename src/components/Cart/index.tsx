import { ShoppingCartSimple } from "@phosphor-icons/react"
import { CartContainer } from "./styles";

export const CartVariants = {
  header: {
    background: "#F1E9C9",
    color: "#C47F17"
  },
  card: {
    background: "#4B2995",
    color: "#F3F2F2"
  }
}

interface CartProps {
  variant: {
    background: string,
    color: string
  }
}

export function Cart({ variant }: CartProps) {
  return (
    <CartContainer background={variant.background} >
      <ShoppingCartSimple size={22} color={variant.color} weight="fill" />
    </CartContainer>
  )
}