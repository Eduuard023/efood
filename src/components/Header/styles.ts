import styled from 'styled-components'
import { colors } from '../../styles'

export const Hero = styled.div`
  height: 400px;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .heroImage {
    width: 100%;
    position: relative;
  }

  .logo {
    position: absolute;
    margin-top: 80px;
  }
`

export const Text = styled.h1`
  position: absolute;
  font-size: 36px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${colors.vermelho};
  font-weight: bold;
`
