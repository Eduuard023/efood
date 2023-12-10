import facebook from '../../assets/images/facebook-logo.png'
import instagram from '../../assets/images/instagram-logo.png'
import twitter from '../../assets/images/twitter-logo.png'
import { Logo } from '../Logo'
import * as S from './styles'

const Footer = () => {
  return (
    <>
      <S.FooterBg>
        <S.FooterContainer className="container">
          <Logo />
          <S.SocialMedias>
            <li>
              <a href="#">
                <img src={instagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} />
              </a>
            </li>
          </S.SocialMedias>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado
          </p>
        </S.FooterContainer>
      </S.FooterBg>
    </>
  )
}

export default Footer
