import { ButtonStyle } from './styled'

export type ButtonProps = {
  name: 'info' | 'add'
  children: string | JSX.Element | number
  onClick?: () => void
  first?: string
}

const Button = ({ name, children, onClick, first }: ButtonProps) => {
  return (
    <>
      <ButtonStyle name={name} onClick={onClick} first={first}>
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button
