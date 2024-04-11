import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderOptions } from "./style";
import logo from '../../assets/logo.png'
import { CityCard } from "./CityCard";
import { Cart, CartVariants } from "../Cart";

export function Header() {

  return (
    <HeaderContainer>
      <Link to='/'><img src={logo} alt="" /></Link>
      <HeaderOptions>
        <CityCard />
        <Cart variant={CartVariants.header} />
      </HeaderOptions>

    </HeaderContainer>
  )
}