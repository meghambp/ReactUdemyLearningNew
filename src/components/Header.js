import Logo from '../assets/logo.png'
import './header.css';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Home" />
      <a href="./">Home</a>
    </header>
  )
}
