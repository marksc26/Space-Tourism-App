import React, { useState } from 'react'
import './styles/Destination.css'
import { destinations } from '../../public/data.json'



const Destination = () => {

  const [planets, setPlanets] = useState(destinations)
  const [value, setValue] = useState(0)




  return (
    <main className='destination'>

    <div className='titleDestination'>
      <h2><span>01 </span> PICK YOUR DESTINATION</h2>
    </div>
    
   <article className='articleDestination'>

    <section className='imageContainer'>
      <img className='planetImg' src={planets[value].images.png} alt="" />
    </section>

    <section className='infoPlanet'>
      <div className='buttonsPlanets'>
        {
          planets.map((item, index) =>{
           return <h2 className={index === value ? "buttonsSub" : "buttons"} key={index} onClick={() => setValue(index)}>{item.name.toUpperCase()}</h2>
          })
        }
      </div>
      <div className='mainInfo'>
        <h1 className='name'>{planets[value].name.toUpperCase()}</h1>
        <p className='description'>{planets[value].description}</p>
      </div>
      
        <hr className='hrDestination'/>

      <div className='distance-travel'>
        <div className='distance'>
          <h2 >AVG. DISTANCE</h2>
          <h1>{planets[value].distance}</h1>
        </div>
        <div className='travel'>
          <h2 >EST. TRAVEL TIME</h2>
          <h1>{planets[value].travel}</h1>
        </div>
      </div>
    </section>        
      </article>



    </main>
  )
}

export default Destination