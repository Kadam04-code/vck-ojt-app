import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
        return(
            <div className='head-nav'>
                <header>
                    <nav className='headnav'>
                        <Link to="/home" className='home-nav-box'>Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/course">Courses</Link>
                    </nav>
                </header>
            </div>
            )
}

export default Header;