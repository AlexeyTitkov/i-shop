import logo from '../src/assets/img/logo.svg'
import cart from '../src/assets/img/cart.svg'

export const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Logo"/>

      <img src={cart} alt="cart"/>
    </header>
  )
}