import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderOptions } from "./style";
import logo from '../../assets/logo.png'
import { CityCard } from "./CityCard";
import { Cart, CartVariants } from "../Cart";
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {

  const { cartItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to='/'><img src={logo} alt="" /></Link>
      <HeaderOptions>
        <CityCard />
        <Link to='/cart'>
          <Cart variant={CartVariants.header} items={cartItems} />
        </Link>
      </HeaderOptions>

    </HeaderContainer>
  )
}