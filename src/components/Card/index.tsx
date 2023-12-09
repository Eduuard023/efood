import { Link } from 'react-router-dom'
import star from '../../assets/images/estrela.png'
import Button from '../Button'
import { ButtonStyle } from '../Button/styled'
import Tag from '../Tag'
import {
  CardContainer,
  CardHeader,
  CardInfo,
  Description,
  Score
} from './styles'

export type CardProps = {
  image: string
  title: string
  description: string
  score?: number
  category?: string
  spotlight?: string
  type: 'restaurant' | 'product'
}

const Card = ({
  image,
  title,
  description,
  score,
  category,
  spotlight,
  type
}: CardProps) => {
  if (type === 'restaurant') {
    return (
      <CardContainer type={type}>
        <img src={image} alt={title} />
        <Tag spotlight={spotlight as string} category={category as string} />
        <CardInfo type={type}>
          <CardHeader>
            <h3>{title}</h3>
            <Score>
              <span>{score}</span>
              <img src={star} alt={title} />
            </Score>
          </CardHeader>
          <Description type={type}>{description}</Description>
          <ButtonStyle name="info">
            <Link to="/">Saiba Mais</Link>
          </ButtonStyle>
        </CardInfo>
      </CardContainer>
    )
  } else {
    return (
      <CardContainer type={type}>
        <img src={image} alt={title} />
        <CardInfo type={type}>
          <h3>{title}</h3>
          <Description type={type}>{description}</Description>
          <Button name="add">Adicionar ao carrinho</Button>
        </CardInfo>
      </CardContainer>
    )
  }
}

export default Card
