import { ButtonStyle } from './styled'

export type ButtonProps = {
  name: 'info' | 'add'
  children: string | JSX.Element | number
}

const Button = ({ name, children }: ButtonProps) => {
  return (
    <>
      <ButtonStyle name={name}>{children}</ButtonStyle>
    </>
  )
}

export default Button
