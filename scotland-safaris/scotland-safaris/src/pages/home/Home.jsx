import React from 'react'
import './Home.css'
import MainHeader from '../../components/MainHeader'
import Safaris from '../../components/Safaris'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'



const Home = () => {
  return (
    <>
    <MainHeader />
    <Safaris/>
    <Values/>
    <FAQs/> 
    
    </>
  )
}

export default Home