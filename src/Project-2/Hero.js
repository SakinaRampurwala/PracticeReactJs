import React from 'react'
import HeroImage from '../Images/photo-grid.png'
import './project-2.css'


export default function Hero(){
    return(
        <section className='hero'>
            <img src={HeroImage} alt='heroImg'  className='hero-photo'/>

            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-para'>Join unique interactive activities lead by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
