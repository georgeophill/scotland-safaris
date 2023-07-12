import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/kingfisher.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__Header-container">
        <div className="main__header-left">
          <h3>#BackToOurRoots</h3>
          <h1>Bringing Wilderness Back </h1>
          <p>Scotland Safaris is a way that allows us to develop the understanding and love for the wild, unlocking the benefits 
            we can gain both physically and mentally from being outdoors & immersing yourself in nature.</p>
          <Link to="/safaris" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeaderImage" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader