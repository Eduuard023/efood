import styled from 'styled-components'
import { TagProps } from '.'
import { colors } from '../../styles'

export const TagStyled = styled.div`
  display: flex;
  column-gap: 8px;

  div {
    background-color: ${colors.vermelho};
    color: ${colors.bege};
    font-weight: 700;
    padding: 6px 4px;
    font-size: 12px;
    text-align: center;
    height: 26px;
  }
`

export const TagSpotlight = styled.div<Omit<TagProps, 'tipo'>>`
  display: ${(props) => (!props.destacado ? 'none' : 'block')};
`
