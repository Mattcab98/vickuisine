import './header.css';
import UseMenu from './useMenu/useMenu';
import VickuisineLogo from '../../images/vickuisineLogo.png'

//icons
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'


const header = () => {

    const { isOpen, toggleMenu } = UseMenu();

    return (
        <>
            <header className='heade'>

                <nav className={`nav ${isOpen ? 'active' : ''}`} id='nav'>

                    <img src={VickuisineLogo} alt="" className={`logoVic ${isOpen ? 'active' : ''}`} />


                    <div className={`menu__nav ${isOpen ? 'active' : ''}`}>
                        <div className="container__a">
                            <a href="#" id="nav__a">Home </a>
                            <a href="#" id="nav__a">About Me</a>
                            <a href="#" id="nav__a">Recipe</a>
                            <a href="#" id="nav__a">Contact</a>
                        </div>

                        <div className="container__redes">
                            <a href="#" className="icon icon__ig">
                                <FaFacebook />
                            </a>
                            <a href="#" className="icon icon__fb">
                                <FaInstagram />
                            </a>
                            <a href="#" className="icon icon__tik">
                                <FaTiktok />
                            </a>
                        </div>

                        <img src={VickuisineLogo} alt="" className={`logoVicNavResponsive ${isOpen ? 'active' : ''}`} />
                    </div>

                    <div className="container__button">
                        <button onClick={toggleMenu} className={`buttonMenu ${isOpen ? 'active' : ''}`} id='buttonMenu'>{isOpen ? <FaTimes /> : <FaBars />}</button>
                    </div>

                </nav>

            </header>
        </>
    )
}
export default header