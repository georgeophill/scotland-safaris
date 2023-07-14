import React from 'react'
import './Home.css'
import MainHeader from '../../components/MainHeader'
import Safaris from '../../components/Safaris'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'



const Home = () => {
  return (
    <>
    <MainHeader />
    <Safaris/>
    <Values/>
    <FAQs/> 
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home