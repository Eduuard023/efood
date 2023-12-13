import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { Logo } from '../Logo'
import * as S from './styles'

const Footer = () => {
  return (
    <>
      <S.FooterBg>
        <S.FooterContainer className="container">
          <Logo />
          <S.SocialMedias>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
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
