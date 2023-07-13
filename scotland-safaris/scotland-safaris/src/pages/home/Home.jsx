import React from 'react'
import './Home.css'
import MainHeader from '../../components/MainHeader'
import Safaris from '../../components/Safaris'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'



const Home = () => {
  return (
    <>
    <MainHeader />
    <Safaris/>
    <Values/>
    <FAQs/> 
    <Testimonials/>
    </>
  )
}

export default Home