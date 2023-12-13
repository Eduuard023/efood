import styled from 'styled-components'
import bannerImg from '../../assets/images/banner-Italia.png'
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
  background-image: url(${bannerImg});
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
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
`

export const RestaurantName = styled.h2`
  font-weight: 900;
  line-height: 38px;
  height: 34px;
  font-size: 32px;
`
