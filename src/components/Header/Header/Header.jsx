import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <>
            <header className='header1'>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;



