import { Link } from 'react-router-dom'
import Logo from '../images/logo1.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container footer__container">
        <article className='footer_footer'>
          <Link to="/" className='logo' >
            <img id="footerlogo" src={Logo} alt="Footer logo" />
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam, doloremque voluptas vitae cupiditate fuga quasi quaerat quis 
            maiores neque labore?
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/orlando-hill-5290431b3/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
            <a href="https://www.instagram.com/scotlandsafaris/" target="_blank" rel='noreferrer'><AiFillInstagram /></a>
            <a href="https://www.facebook.com/orlando.hill.18" target="_blank" rel='noreferrer'><FaFacebook /></a>
            <a href="" target="_blank" rel='noreferrer'><AiOutlineTwitter /></a>
          </div>
        </article>
      </div>
      <div className='footer-info'>
        <article className='footer_footer'>
          <h4 className='Footer-links'>Permalinks</h4>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/safaris">Safaris</Link>
          </li>
          <li>
            <Link to="/guides">Guides</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </article>
        <article className='footer_footer'>
          <h4 className='Footer-links'>Insights</h4>
          <li>
            <Link to="/s">Blog</Link>
          </li>
          <li>
            <Link to="/s">Case Studies</Link>
          </li>
          <li>
            <Link to="/s">Events</Link>
          </li>
          <li>
            <Link to="/s">Communities</Link>
          </li>
          <li>
            <Link to="/s">FAQs</Link>
          </li>
        </article>
        <article className='footer_footer'>
          <h4 className='Footer-links'>Get In Touch</h4>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/s">Support</Link>
          </li>
        </article>
      </div>
      <div className="footer__copyright">
        <small>{currentYear} Scotland Safaris &copy; All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer