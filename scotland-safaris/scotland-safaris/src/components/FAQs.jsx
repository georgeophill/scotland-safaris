import SectionHead from "./SectionHead"
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../data'
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title="FAQs"/>
            <div className="FAQs__wrapper">
                {
                    faqs.map(({id, answer, question}) => {
                        return <FAQ key={id} answer={answer} question={question} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs  