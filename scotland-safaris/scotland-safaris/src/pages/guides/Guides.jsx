import Header from '../../components/Header'
import HeaderImage from '../../images/Otter.JPG'
import { guides } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import Guide from '../../components/Guide'
import './Guides.css'

const Guides = () => {
  return (
    <>
    <Header title="Our Guides" image={HeaderImage}>
    Our guides are the best in the business, they know the land like the back of their hand and will make sure you have the best experience possible.
    </Header>
    <section className='guides'>
      <div className="container guides__container">
        {
          guides.map(({ id, image, name, job, socials }) => {
            return <Guide key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram />, link: socials[0]},
                {icon: <FaFacebook />, link: socials[1]},
                {icon: <FaLinkedin />, link: socials[2]},
                {icon: <AiOutlineTwitter />, link: socials[3]}
              ]
            } /> 
          })
        }
      </div>
    </section>
    </>
  )
}

export default Guides