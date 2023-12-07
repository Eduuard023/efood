import logo from '../../assets/images/logo.png'
import { Logo } from '../Header/styles'
import { FooterBg, FooterContainer, SocialMedias } from './styles'

const Footer = () => {
  return (
    <>
      <FooterBg>
        <FooterContainer className="container">
          <Logo src={logo} alt="logo efood" />
          <SocialMedias>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </SocialMedias>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado
          </p>
        </FooterContainer>
      </FooterBg>
    </>
  )
}

export default Footer
