import { ButtonStyle } from './styled'

export type ButtonProps = {
  name: 'info' | 'add'
  children: string | JSX.Element | number
  onClick?: () => void
  first?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ name, children, onClick, first, type }: ButtonProps) => {
  return (
    <>
      <ButtonStyle name={name} onClick={onClick} first={first} type={type}>
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button
