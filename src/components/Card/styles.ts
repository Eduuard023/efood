import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  max-width: 472px;
  width: 100%;
  color: ${colors.vermelho};
  background-color: ${colors.branco};
  border: 1px solid ${colors.vermelho};
  border-top: none;
  margin: 0 auto;
  box-sizing: border-box;
`

export const CardInfo = styled.div`
  padding: 8px;
`

export const Description = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 15px;
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  gap: 8px;
`
