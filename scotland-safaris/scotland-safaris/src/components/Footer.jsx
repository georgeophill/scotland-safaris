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
        <article>
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
        <article>
          <h4 className='Footer-links'>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/safaris">Safaris</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4 className='Footer-links'>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4 className='Footer-links'>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>{currentYear} Scotland Safaris &copy; All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer