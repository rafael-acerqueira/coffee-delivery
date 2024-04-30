import { Minus, Plus } from '@phosphor-icons/react'
import { Container, CoffeeQuantity } from './style'


export function CoffeeCount({ quantity, decreaseCoffee, increaseCoffee }) {
  return (
    <Container>
      <Minus
        size={14}
        color="#8047F8"
        onClick={decreaseCoffee}
      />
      <CoffeeQuantity type="number" value={quantity} />
      <Plus
        size={14}
        color="#8047F8"
        onClick={increaseCoffee}
      />
    </Container>
  )

}