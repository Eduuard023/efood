import styled from 'styled-components'
import { colors } from '../../styles'
import { TagProps } from '.'

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

export const TagSpot = styled.div<Omit<TagProps, 'category'>>`
  display: ${(props) => (props.spotlight === 'false' ? 'none' : 'block')};
`
