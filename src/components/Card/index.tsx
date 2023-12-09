import star from '../../assets/images/estrela.png'
import Button from '../Button'
import Tag from '../Tag'
import {
  CardContainer,
  CardHeader,
  CardInfo,
  Description,
  Score
} from './styles'

type CardProps = {
  image: string
  title: string
  description: string
  score: number
  category: string
  spotlight: string
}

const Card = ({
  image,
  title,
  description,
  score,
  category,
  spotlight
}: CardProps) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <Tag spotlight={spotlight} category={category} />
      <CardInfo>
        <CardHeader>
          <h3>{title}</h3>
          <Score>
            <span>{score}</span>
            <img src={star} alt={title} />
          </Score>
        </CardHeader>
        <Description>{description}</Description>
        <Button name="info">Saiba mais</Button>
      </CardInfo>
    </CardContainer>
  )
}

export default Card
