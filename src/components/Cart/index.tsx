import { ShoppingCartSimple } from "@phosphor-icons/react"
import { CartContainer, CartNotification } from "./styles";

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
  },
  items: number,
  addToCart: () => void
}

export function Cart({ variant, items, addToCart }: CartProps) {
  return (
    <CartContainer background={variant.background} onClick={addToCart}>
      {
        items > 0 && <CartNotification>{items}</CartNotification>
      }
      <ShoppingCartSimple size={22} color={variant.color} weight="fill" />
    </CartContainer>
  )
}