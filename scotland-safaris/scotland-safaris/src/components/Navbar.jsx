import {useState, useEffect }from 'react'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import './Navbar.css'
import Logo from '../images/logo1.png'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 150){
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav__container">
            <Link to="/" className="logo" onClick={() => setIsNavShowing(false)} >
                <img src={Logo} alt="Logo" id="logo1"/>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}> 
              {
                links.map(({ name, path}, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={path} className = {({isActive}) => isActive ? 'active-nav' : '' } 
                      onClick={() => setIsNavShowing (prev => !prev )}> {name} </NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev )}>
              {
                isNavShowing ? <GrClose /> : <FaBars />
              }
            </button>
        </div>
    </nav>
  )
}

export default Navbar