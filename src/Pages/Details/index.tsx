import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { MenuItem, Restaurant } from '../../types/api'
import RestaurantHeader from '../../components/RestaurantHeader'
import * as S from './styles'
import { MenuList } from '../../components/MenuList'

const Details = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<MenuItem[]>()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  const getTipo = (tipo: string) => {
    return tipo.charAt(0).toUpperCase() + tipo.slice(1)
  }

  useEffect(() => {
    const getData = async () => {
      const menuData = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
      ).then((res) => res.json())
      setMenu(menuData.cardapio)

      const restaurantData = await fetch(
        `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
      ).then((res) => res.json())
      setRestaurant(restaurantData)
    }
    getData()
  }, [id])

  if (!menu || !restaurant) {
    return (
      <>
        <RestaurantHeader />
        <h2 style={{ display: 'grid', placeItems: 'center', height: '400px' }}>
          Carregando...
        </h2>
      </>
    )
  }

  return (
    <>
      <RestaurantHeader />
      <S.Banner>
        <S.BannerImage style={{ backgroundImage: `url(${restaurant.capa})` }} />
        <S.Container className="container">
          <S.Category>{getTipo(restaurant.tipo as string)}</S.Category>
          <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
        </S.Container>
      </S.Banner>
      <MenuList items={menu} />
    </>
  )
}

export default Details
