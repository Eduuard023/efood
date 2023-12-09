import styled from 'styled-components'
import { CardListProps } from '.'

export const ListContainer = styled.section<CardListProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.orientation === 'vertical' ? '1fr 1fr' : '1fr 1fr 1fr'};
  calumn-gap: 80px;
  row-gap: 48px;
`
