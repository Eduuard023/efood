import { Logo } from '../Logo'
import { Cart, HeaderBackground, HeaderContainer, Title } from './styles'

const HeaderRestaurant = () => {
  return (
    <HeaderBackground>
      <HeaderContainer className="container">
        <Title>Restaurantes</Title>
        <Logo />
        <Cart>0 produto(s) no carrinho</Cart>
      </HeaderContainer>
    </HeaderBackground>
  )
}

export default HeaderRestaurant
