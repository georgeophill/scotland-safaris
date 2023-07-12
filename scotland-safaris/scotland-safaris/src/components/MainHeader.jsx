import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/kingfisher.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__Header-container">
        <div className="main__header-left">
          <h4>#BackToOurRoots</h4>
          <h1>Bringing Wilderness Back </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iusto esse recusandae quisquam? Distinctio officiis assumenda laudantium quo iusto, blanditiis praesentium!</p>
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