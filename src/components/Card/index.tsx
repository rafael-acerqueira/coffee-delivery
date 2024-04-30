import {
  Name,
  Category,
  Item,
  ItemImage,
  CategoryContainer,
  Description,
  PriceSymbol,
  Price,
  FooterCard,
  CardAction
} from './style'

import { Cart, CartVariants } from '../../components/Cart'
import { CoffeeCount } from '../../components/CoffeeCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'


interface Coffee {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number,
  categories: string[]
}

export function Card({ coffee }: Coffee) {

  const { addCoffeeToCart } = useContext(CartContext)

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

  function addToCart() {
    addCoffeeToCart({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      image: coffee.image,
      quantity
    })
    setQuantity(0)
  }

  return (
    <Item key={coffee.id}>
      <ItemImage src={coffee.image} />
      <CategoryContainer>
        {coffee.categories.map(category => (
          <Category key={category}>{category}</Category>
        ))}
      </CategoryContainer>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <FooterCard>
        <div>
          <PriceSymbol>R$</PriceSymbol>
          <Price>{coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Price>
        </div>
        <CardAction>
          <CoffeeCount
            quantity={quantity}
            increaseCoffee={increaseCoffee}
            decreaseCoffee={decreaseCoffee}
          />
          <Cart variant={CartVariants.card} addToCart={addToCart} items={0} />
        </CardAction>
      </FooterCard>
    </Item>
  )
}