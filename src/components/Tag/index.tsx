import * as S from './styles'

export type TagProps = {
  spotlight: string
  category: string
}

const Tag = ({ spotlight, category }: TagProps) => {
  return (
    <>
      <S.TagStyled>
        <S.TagSpot spotlight={spotlight}>Destaque da semana</S.TagSpot>
        <div>{category}</div>
      </S.TagStyled>
    </>
  )
}

export default Tag
