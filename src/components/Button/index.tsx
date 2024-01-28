import { ButtonStyle } from './styled'

export type ButtonProps = {
  name: 'info' | 'add'
  children: string | JSX.Element | number
  onClick?: () => void
}

const Button = ({ name, children, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonStyle name={name} onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button
