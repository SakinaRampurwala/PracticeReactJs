import react from 'react'
import '../style.css';


export default function Main(){
    return(
        <main className='mainBox'>
            <h1 className='mainBoxHead'>Fun facts about React</h1>
            <ul className='mainBoxUl'>
                <li>Was first relased in 2013</li>
                <li>Was orignally created by Jordan Walke</li>
                <li>Has well over 100k stars on Guthub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousand of enterprise apps, Including mobile apps</li>
            </ul>
        </main>
    )
}