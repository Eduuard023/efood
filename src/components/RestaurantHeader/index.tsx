import { Logo } from '../Logo'
import * as S from './styles'

const HeaderRestaurant = () => {
  return (
    <S.HeaderBackground>
      <S.HeaderContainer className="container">
        <S.Title>Restaurantes</S.Title>
        <Logo />
        <S.Cart>0 produto(s) no carrinho</S.Cart>
      </S.HeaderContainer>
    </S.HeaderBackground>
  )
}

export default HeaderRestaurant
