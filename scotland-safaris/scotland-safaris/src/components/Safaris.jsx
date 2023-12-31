import {LuMountainSnow} from 'react-icons/lu'
import SectionHead from './SectionHead'
import {safaris} from '../data'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Card from '../UI/Card.jsx'

const Safaris = () => {
  return (
    <section className="safaris">
        <div className="container safaris__container">
            <SectionHead icon={<LuMountainSnow/>} title="Safaris" />
            <div className="safaris__wrapper">
                {
                    safaris.map(({id, icon, title, info, path }) => {
                        return (
                            <Card className="safaris__safari" key={id}>
                                <br />
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Read More <AiOutlineArrowRight/></Link>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Safaris

