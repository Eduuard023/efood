import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonStyle } from '../Button/styled'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  height: 100%;
  width: 100%;
`

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.vermelho};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  ul {
    margin-bottom: 40px;
  }
  h4 {
    display: flex;
    justify-content: space-between;
    color: ${colors.bege};
    font-weight: 400;
    margin-bottom: 16px;
  }
  ${ButtonStyle} {
    width: 100%;
    height: 24px;
    font-size: 14px;
  }
`

export const CartItemContainer = styled.li`
  background-color: ${colors.bege};
  margin-bottom: 16px;
  padding: 8px 8px 12px 8px;
  position: relative;
  > img {
    position: absolute;
    right: 8px;
    bottom: 8px;
    height: 16px;
    width: 16px;
    object-fit: cover;
    cursor: pointer;
  }
`

export const CartItem = styled.div`
  display: flex;
  color: ${colors.vermelho};
  gap: 8px;
  h3 {
    margin-bottom: 16px;
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
