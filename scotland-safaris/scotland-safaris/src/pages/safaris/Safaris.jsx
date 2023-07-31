import React from 'react'
import safaris from '../../components/Safaris'
import Header from '../../components/Header'
import HeaderImage from '../../images/Stag.JPG'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './Safaris.css'

const Safaris = () => {
  return (
    <>
    <Header title="Safari Options" image={HeaderImage}>
    Take a look at our different packages to experience a variety of Safaris, 
    each one is uniquely planned out and considers all of the best that Scotland has to offer.
    </Header>
    <section className='safaris'>
      <div className='container plans__container'>
        {
          plans.map(({ id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`£${price}`}</h1>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index ) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <a href="mailto:orlandohill1997@gmail.com">
                <button className='btn lg'>Choose Safari</button>
              </a>
            </Card>
          })
        }
      </div>

    </section>
    </>
  )
}

export default Safaris