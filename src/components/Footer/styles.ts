import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBg = styled.div`
  background-color: ${colors.bege};
  margin-top: 80px;

  p {
    width: 480px;
    height: 24px;
    color: ${colors.vermelho};
    font-weight: 400px;
    font-size: 10px;
    text-align: center;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
`

export const SocialMedias = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;
  column-gap: 8px;

  li {
    background-color: ${colors.vermelho};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    a {
      color: ${colors.bege};
      font-size: 12px;
    }
  }
`
