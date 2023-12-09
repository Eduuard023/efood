import styled from 'styled-components'
import bg from '../../assets/images/Vector.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${colors.vermelho};
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

export const Title = styled.h2`
  margin-right: 340px;
  width: 108px;
  text-align: center;
`

export const Cart = styled.h3`
  margin-left: 193px;
  width: 256px;
  text-align: right;
`

export const HeaderBackground = styled.div`
  background-image: url(${bg});
  height: 186px;
`
