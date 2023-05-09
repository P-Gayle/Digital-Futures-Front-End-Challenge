import '../Header/Header.css';
import Logo from '../Header/logo.png';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="page-header">
            <Link to='/'>
                <img src={Logo} alt="logo" height='120px' />
            </Link>
            <h1 className='page-title'>BREAKING NEWS</h1>
            
        </header>
    )
}

export default Header;