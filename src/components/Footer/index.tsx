import facebook from '../../assets/images/facebook-logo.png'
import instagram from '../../assets/images/instagram-logo.png'
import twitter from '../../assets/images/twitter-logo.png'
import { Logo } from '../Logo'
import { FooterBg, FooterContainer, SocialMedias } from './styles'

const Footer = () => {
  return (
    <>
      <FooterBg>
        <FooterContainer className="container">
          <Logo />
          <SocialMedias>
            <li>
              <a href="#">{instagram}</a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a href="#">{twitter}</a>
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
