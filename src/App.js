import './App.css';
import Navbar from './Project-2/Navbar';
import Card from './Project-2/Card';
import Hero from './Project-2/Hero';
import CardData from "./Project-2/CardData";




function App() {
  let myCards=CardData.map((element)=>{
    return <Card  items={element} />
  })
  return (
    <div>
         <Navbar/>
         <Hero/>
         <div className='cardComponents'>
             {myCards}
         </div>
    </div>
  );
}

export default App;
