import { Link } from 'react-router-dom';
import Logo from './images/FieldX.png';
import './style.css';
const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <img src={Logo} alt='logo' />
      </Link>
      <div>
        <button className='btn btnLogin'>
          <Link to='/login'>
            Login
          </Link>
        </button>
        <button className='btn btnRegis'>
          <Link to='/registration'>
            Registration
          </Link>
        </button>
      </div>
    </nav>
  )
}

export default Header