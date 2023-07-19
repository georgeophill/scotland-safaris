import Header from '../../components/Header'
import HeaderImage from '../../images/bluebells.jpeg'
import { MdEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io' 

import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage} id="contactimage" >
    Connect with us today! Please do not hesitate to contact us through our seamless communication experience. Reach out for inquiries, collaborations, or support. We're just a click away!
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:orlandohill1997@gmail.com" target='_blank' rel='noreferrer noopener'> <MdEmail/> </a>
          <a href="https://ig.me/m/scotlandsafaris/" target='_blank' rel='noreferrer noopener'> <BsInstagram/> </a>
          <a href="https://wa.me/+447583161434" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp/> </a>
        </div>

      </div>

    </section>
    </>
  )
}

export default Contact