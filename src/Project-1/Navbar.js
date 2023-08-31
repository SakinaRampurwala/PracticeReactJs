import react from 'react'
// import logo from '../Images/logo192.png';
import '../style.css';


export default function Navbar(){
    return(
        <nav>
            <h1 className='logoHeader'>
                {/* <img src={logo} className='logo' alt="logo" />  */}
                React Facts</h1>
            <h2> React Course - Project 1</h2>
        </nav>
    )
}