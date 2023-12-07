import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBg = styled.div`
  background-color: ${colors.bege};

  p {
    width: 480px;
    height: 24px;
    color: ${colors.vermelho};
    font-size: 10px;
    text-align: center;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
  margin-top: 80px;
`

export const SocialMedias = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;
  column-gap: 8px;

  li {
    background-color: ${colors.vermelho};
  }
`
