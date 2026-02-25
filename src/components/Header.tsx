type Props = {
  texto: string
}

const Header = (props: Props) => {
  return (
    <h1>{props.texto}</h1>
  )
}

export default Header