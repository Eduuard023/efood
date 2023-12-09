import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { LogoStyle } from './styles'

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyle src={logo} alt="logo efood" />
    </Link>
  )
}
