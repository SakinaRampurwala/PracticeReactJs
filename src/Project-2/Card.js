import React from "react"
import star from '../Images/star.png'
import './project-2.css'


export default function Card(Props){
    console.log(Props);
    return(
        <div className="card">
            <img src={Props.items.profile_picture}  alt='images' className="cardImage"/>
            <div>
                <img src={star}  alt="star" className="starImage"/>
                <span>Followers:- {Props.items.followers}</span>
            </div>
            <p>Name:-{Props.items.full_name}</p>
            <p>Email:- {Props.items.email}</p>
            <p>Location:- {Props.items.location}</p>


        </div>
    )
}