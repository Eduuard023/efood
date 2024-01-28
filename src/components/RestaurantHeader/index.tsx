import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { Logo } from '../Logo'
import * as S from './styles'
import { RootReducer } from '../../store'

const HeaderRestaurant = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBackground>
      <S.HeaderContainer className="container">
        <S.Title>Restaurantes</S.Title>
        <Logo />
        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContainer>
    </S.HeaderBackground>
  )
}

export default HeaderRestaurant
