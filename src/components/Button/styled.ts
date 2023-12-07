import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.name === 'info' ? colors.vermelho : colors.bege};
  color: ${(props) => (props.name === 'info' ? colors.bege : colors.vermelho)};
`
