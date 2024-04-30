import { useState } from 'react'

import { images } from '../Home/images'

import {
  BannerImage,
  CoffeeList,
  CoffeeHeader,
  CoffeeContainer,
  BannerImageContent
} from './style'

import banner from '../../assets/images/banner.png'
import { Card } from '../../components/Card'

interface Coffee {
  id: number,
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
        id: 1,
        name: 'Expresso Tradicional',
        image: images["image-1"],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 19.90,
        categories: ['tradicional']
      },
      {
        id: 2,
        name: 'Expresso Americano',
        image: images["image-2"],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 29.90,
        categories: ['tradicional']
      },
      {
        id: 3,
        name: 'Expresso Cremoso',
        image: images["image-3"],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 4.50,
        categories: ['tradicional']
      },
      {
        id: 4,
        name: 'Expresso Gelado',
        image: images["image-4"],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 5.20,
        categories: ['tradicional', 'gelado']
      },
      {
        id: 5,
        name: 'Café com Leite',
        image: images["image-5"],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 6.80,
        categories: ['tradicional', 'com leite']
      },
      {
        id: 6,
        name: 'Latte',
        image: images["image-6"],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 7.50,
        categories: ['tradicional', 'com leite']
      },
      {
        id: 7,
        name: 'Capuccino',
        image: images["image-7"],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 8.90,
        categories: ['tradicional', 'com leite']
      },
      {
        id: 8,
        name: 'Macchiato',
        image: images["image-8"],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        categories: ['tradicional', 'com leite']
      },
      {
        id: 9,
        name: 'Mocaccino',
        image: images["image-9"],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 10.90,
        categories: ['tradicional', 'com leite']
      },
      {
        id: 10,
        name: 'Chocolate Quente',
        image: images["image-10"],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 11.90,
        categories: ['especial', 'com leite']
      },
      {
        id: 11,
        name: 'Cubano',
        image: images["image-11"],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 11.50,
        categories: ['especial', 'alcoólico', 'gelado']
      },
      {
        id: 12,
        name: 'Havaiano',
        image: images["image-12"],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 10.40,
        categories: ['especial']
      },
      {
        id: 13,
        name: 'Árabe',
        image: images["image-13"],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 19.90,
        categories: ['especial']
      },
      {
        id: 14,
        name: 'Irlandês',
        image: images["image-14"],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 7.90,
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
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeContainer>
      </CoffeeList>
    </>
  )
}