import logo from '../../assets/images/logo.png'
import hero from '../../assets/images/Vector.png'
import { Content, Hero, Text } from './styles'

const Header = () => {
  return (
    <Hero>
      <Content>
        <img className="heroImage" src={hero} alt="hero" />
        <img className="logo" src={logo} alt="" />
        <Text>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Text>
      </Content>
    </Hero>
  )
}

export default Header
