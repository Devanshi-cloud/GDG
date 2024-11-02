import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import heroImage from "../../assets/realist-footer.png"
import Achievement from '../../Commons/Achievement'

const Hero = () => {
  return (
    <header id='hero'>
        <div className='wrapper'>
            <div className='column'>
                <h1 className='heading-1'>
                    <span className='gradient-text'>We Are GDG - BU!</span>
                </h1>
                <p className="muted">
                </p>
                <Achievement/>
                <div className="flex-center buttons-wrapper">
                    <Link to='contact' smooth={true} className='btn'>Learn more</Link>
                    <Link to='properties' smooth={true} className='btn primary'>Discover</Link>
                </div>
            </div>
            <div className="column hero-image">
                <img src={heroImage} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Hero