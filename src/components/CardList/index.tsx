import Card from '../Card'
import * as S from './styles'
import Restaurant from '../../models/Restaurant'
import { Product } from '../../models/Product'

export type CardListProps = {
  orientation: string
  restaurants?: Restaurant[]
  products?: Product[]
}

const CardList = ({ restaurants, products }: CardListProps) => {
  if (restaurants !== undefined) {
    return (
      <S.ListContainer orientation="vertical" className="container">
        {restaurants?.map((restaurant) => (
          <Card
            title={restaurant.title}
            image={restaurant.image}
            description={restaurant.description}
            score={restaurant.score}
            spotlight={restaurant.spotlight}
            category={restaurant.category}
            key={restaurant.id}
            type="restaurant"
          />
        ))}
      </S.ListContainer>
    )
  } else {
    return (
      <S.ListContainer orientation="horizontal" className="container">
        {products?.map((product) => (
          <Card
            title={product.title}
            image={product.image}
            description={product.description}
            type="product"
            key={product.id}
          />
        ))}
      </S.ListContainer>
    )
  }
}

export default CardList
