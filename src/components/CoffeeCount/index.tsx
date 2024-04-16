import { useState } from 'react'

import { Minus, Plus } from '@phosphor-icons/react'
import { Container, CoffeeQuantity } from './style'


export function CoffeeCount() {

  const [quantity, setQuantity] = useState(0)

  function increaseCoffee() {
    setQuantity(quantity => quantity + 1)
  }

  function decreaseCoffee() {
    setQuantity(quantity => {

      if (quantity > 0) {
        return quantity - 1
      }

      return 0
    })
  }

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