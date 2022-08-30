import React from 'react';
import Fruit from './Components/Fruit';
import "./style.css"
import FruitData from './Components/FruitData';

const Frutsinfo=(value)=>
{
  return(
<>
<Fruit 
   title={value.title}
   imgsrc={value.imgsrc}
   desc={value.desc}
   btn={value.btn}
  />
</>
  )
}

const App=() =>{
  return (
 <>
   <h1> About Fruit</h1>
   <div className='container'> 
 
  {FruitData.map(Frutsinfo)}

  </div>
  </>
 )}
 export default App;