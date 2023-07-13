import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from '../data'
import { useState } from "react"

const Testimonials = () => {
    const [ index, setIndex ] = useState(0)
    const {name, quotes, job, avatar} =  testimonials[index]
  return (
    <section className="testimonials">
        <div className="container testimonials__container"></div>
        <SectionHead icon={ ImQuotesLeft } title="Testimonials" />
        <Card className="testimonial">
            <div className="testimonial__avatar">
                <img src={ avatar } alt={ name } />
            </div>
        </Card>
    </section>
  )
}

export default Testimonials