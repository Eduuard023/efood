import { Logo } from '../Logo'
import * as S from './styles'

const Header = () => (
  <>
    <S.HeroBg>
      <S.Container className="container">
        <Logo />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.Container>
    </S.HeroBg>
  </>
)

export default Header
