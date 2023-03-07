import '../Header/Header.css';
import Logo from '../Header/logo.png';

const Header = () => {
    return (
        <header className="page-header">
            <img src={Logo} alt="logo" height='120px' />
            <h1 className='page-title'>BREAKING NEWS</h1>
            
        </header>
    )
}

export default Header;