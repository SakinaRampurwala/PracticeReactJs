import React from 'react'
import AirbnbLogo from '../Images/airbnb-logo.png'
import './project-2.css'

export default function Navbar(){
    return(
        <nav>
            <img src={AirbnbLogo} alt='companyLogo' />
        </nav>
    )
}
