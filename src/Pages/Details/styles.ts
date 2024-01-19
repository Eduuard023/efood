import styled from 'styled-components'

import { colors } from '../../styles'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
`

export const BannerImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  filter: brightness(0.5);
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 156px;
  color: ${colors.branco};
`

export const Category = styled.h3`
  margin-top: 24px;
  font-weight: 200;
  font-size: 32px;
`

export const RestaurantName = styled.h2`
  font-weight: 900;
  margin-bottom: 32px;
  height: 34px;
  font-size: 32px;
`
