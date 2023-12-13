import styled from 'styled-components'
import { colors } from '../../styles'
import { TagStyled } from '../Tag/styles'
import { CardProps } from '.'

export const CardContainer = styled.div<
  Omit<
    CardProps,
    'title' | 'description' | 'score' | 'image' | 'spotlight' | 'category'
  >
>`
  max-width: ${(props) => (props.type === 'restaurant' ? '472px' : '320px')};
  width: 100%;
  color: ${(props) =>
    props.type === 'restaurant' ? colors.vermelho : colors.bege};
  background-color: ${(props) =>
    props.type === 'restaurant' ? colors.branco : colors.vermelho};
  border: ${(props) =>
    props.type === 'restaurant' && `1px solid ${colors.vermelho}`};
  border-top: none;
  position: relative;
  padding: ${(props) => props.type !== 'restaurant' && '8px'};
  width: ${(props) => props.type !== 'restaurant' && '320px'};
  height: ${(props) => props.type !== 'restaurant' && '338px'};

  ${TagStyled} {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`

export const CardInfo = styled.div<
  Omit<
    CardProps,
    'title' | 'description' | 'score' | 'image' | 'spotlight' | 'category'
  >
>`
  padding: ${(props) => props.type === 'restaurant' && '8px'};
  display: ${(props) => props.type === 'product' && 'flex'};
  flex-direction: ${(props) => props.type === 'product' && 'column'};
  gap: ${(props) => props.type === 'product' && '8px 0'};

  h3 {
    font-size: ${(props) => (props.type === 'restaurant' ? '18px' : '16px')};
    font-weight: ${(props) => (props.type === 'restaurant' ? `900` : `700`)};
  }
`

export const Description = styled.p<
  Omit<
    CardProps,
    'title' | 'description' | 'score' | 'image' | 'spotlight' | 'category'
  >
>`
  margin-bottom: ${(props) => props.type === 'restaurant' && '8px'};
  font-weight: 400;
  font-size: 14px;
  height: 88px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  gap: 8px;
`
