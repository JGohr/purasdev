import { FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa';

function Header() {
    return(
        <div className="layout-header">
            <p id="header-logo">{'[PD]'}</p>
            <div className="header-interacts">
                <FaTwitter className='header-icon' />
                <FaTiktok className='header-icon' />
                <FaLinkedin className='header-icon' />
                <p id='header-cta'>.FOLLOW{'()'}</p> 
            </div>
        </div>
    );
}

export default Header;