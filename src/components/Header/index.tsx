import logo from '../../assets/images/logo.png'
import { HeroBg, Container, Title, Logo } from './styles'

const Header = () => (
  <>
    <HeroBg>
      <Container className="container">
        <Logo src={logo} alt="eFood Logo" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Container>
    </HeroBg>
  </>
)

export default Header
