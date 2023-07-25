import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style/component.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* text-light */}
            <nav className={`navbar fixed-top px-4 ${scrolled ? 'bg-light' : 'bg-transparent'}`} style={{transition: 'background-color 0.3s ease-in-out'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={`${scrolled ? 'https://tupine.engr.tu.ac.th/assets/front/img/logo/logotupine.png' : 'https://tupine.engr.tu.ac.th/assets/front/img/logo/tupinelogo_White.png'}`} alt="Logo" style={{maxHeight: '3.5rem'}} className="d-inline-block align-text-top" />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${scrolled ? 'text-dark' : 'text-light'}`} aria-current="page" to='/hint'>การจับสายรหัส</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
  )
}

export default Header