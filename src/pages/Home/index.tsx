import { useState } from 'react'

import { images } from '../Home/images'

import {
  BannerImage,
  CoffeeList,
  CoffeeHeader,
  CoffeeName,
  CoffeeContainer,
  CoffeeCategory,
  CoffeeItem,
  CoffeeItemImage,
  CoffeeCategoryContainer,
  CoffeeDescription,
  CoffeePriceSymbol,
  CoffeePrice,
  CoffeeFooterCard,
  CoffeeCardAction,
  BannerImageContent
} from './style'

import banner from '../../assets/images/banner.png'
import { Cart, CartVariants } from '../../components/Cart'
import { CoffeeCount } from '../../components/CoffeeCount'

interface Coffee {
  name: string,
  image: string,
  description: string,
  price: number,
  categories: string[]
}

export function Home() {

  const [coffees, setCoffee] = useState<Coffee[]>(() => {
    return [
      {
        name: 'Expresso Tradicional',
        image: images["image-1"],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        categories: ['tradicional']
      },
      {
        name: 'Expresso Americano',
        image: images["image-2"],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        categories: ['tradicional']
      },
      {
        name: 'Expresso Cremoso',
        image: images["image-3"],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        categories: ['tradicional']
      },
      {
        name: 'Expresso Gelado',
        image: images["image-4"],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        categories: ['tradicional', 'gelado']
      },
      {
        name: 'Café com Leite',
        image: images["image-5"],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        name: 'Latte',
        image: images["image-6"],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        name: 'Capuccino',
        image: images["image-7"],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        name: 'Macchiato',
        image: images["image-8"],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        name: 'Mocaccino',
        image: images["image-9"],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        name: 'Chocolate Quente',
        image: images["image-10"],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        categories: ['especial', 'com leite']
      },
      {
        name: 'Cubano',
        image: images["image-11"],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        categories: ['especial', 'alcoólico', 'gelado']
      },
      {
        name: 'Havaiano',
        image: images["image-12"],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        categories: ['especial']
      },
      {
        name: 'Árabe',
        image: images["image-13"],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        categories: ['especial']
      },
      {
        name: 'Irlandês',
        image: images["image-14"],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        categories: ['especial', 'alcoólico']
      }
    ]
  })



  return (
    <>
      <BannerImageContent>
        <BannerImage src={banner} alt="" />
      </BannerImageContent>
      <CoffeeList>
        <CoffeeHeader>Nossos cafés</CoffeeHeader>
        <CoffeeContainer>
          {coffees.map(coffee => (
            <CoffeeItem key={coffee.name}>
              <CoffeeItemImage src={coffee.image} />
              <CoffeeCategoryContainer>
                {coffee.categories.map(category => (
                  <CoffeeCategory key={category}>{category}</CoffeeCategory>
                ))}
              </CoffeeCategoryContainer>
              <CoffeeName>{coffee.name}</CoffeeName>
              <CoffeeDescription>{coffee.description}</CoffeeDescription>
              <CoffeeFooterCard>
                <div>
                  <CoffeePriceSymbol>R$</CoffeePriceSymbol>
                  <CoffeePrice>{coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</CoffeePrice>
                </div>
                <CoffeeCardAction>
                  <CoffeeCount />
                  <Cart variant={CartVariants.card} />
                </CoffeeCardAction>
              </CoffeeFooterCard>
            </CoffeeItem>
          ))}
        </CoffeeContainer>
      </CoffeeList>
    </>
  )
}