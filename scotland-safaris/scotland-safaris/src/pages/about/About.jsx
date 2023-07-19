import Header from '../../components/Header'
import HeaderImage from '../../images/aboutus.jpeg'
import StoryImage from '../../images/Guide1.png'
import VisionImage from '../../images/SunsetSq.jpeg'
import MissionImage from '../../images/FoinavenSq.jpeg'

import './About.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Cumque aut aspernatur aperiam odit molestiae aliquam incidunt provident obcaecati dicta? Beatae.
    </Header>

    <section className='about__story'> 
      <div className='container about__story-container'>
        <div className='about__section-image'>
          <img src={StoryImage} alt="Our Story img" />
        </div>
        <div className='about__section-content'>
          <h1>Our Story</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Consectetur dicta consequatur similique blanditiis incidunt maiores corporis quisquam praesentium in sed. 
            Repudiandae velit tempora alias. Delectus rerum ut perspiciatis sed odio ipsa cupiditate, quo eaque nemo.
            Quaerat numquam odit quia mollitia amet beatae nulla ipsum iusto accusantium sequi? Blanditiis, laudantium ipsa.
          </p> 
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corporis non tempora accusamus suscipit cupiditate saepe animi eveniet facere minus velit?
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'> 
      <div className='container about__vision-container'> 
        <div className='about__section-content'>
          <h1>Our Vision</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Consectetur dicta consequatur similique blanditiis incidunt maiores corporis quisquam praesentium in sed. 
            Repudiandae velit tempora alias. Delectus rerum ut perspiciatis sed odio ipsa cupiditate, quo eaque nemo.
            Quaerat numquam odit quia mollitia amet beatae nulla ipsum iusto accusantium sequi? Blanditiis, laudantium ipsa.
          </p> 
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corporis non tempora accusamus suscipit cupiditate saepe animi eveniet facere minus velit?
          </p>
        </div>
        <div className='about__section-image'>
          <img src={VisionImage} alt="Our vision img" />
        </div>
      </div>

    </section>

    <section className='about__mission'> 
      <div className='container about__mission-container'>
        <div className='about__section-image'>
          <img src={MissionImage} alt="Our mission img" />
        </div>
        <div className='about__section-content'>
          <h1>Our Mission</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Consectetur dicta consequatur similique blanditiis incidunt maiores corporis quisquam praesentium in sed. 
            Repudiandae velit tempora alias. Delectus rerum ut perspiciatis sed odio ipsa cupiditate, quo eaque nemo.
            Quaerat numquam odit quia mollitia amet beatae nulla ipsum iusto accusantium sequi? Blanditiis, laudantium ipsa.
          </p> 
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corporis non tempora accusamus suscipit cupiditate saepe animi eveniet facere minus velit?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About