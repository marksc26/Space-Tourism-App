import React, { useState } from 'react'
import './styles/Crew.css'
import { crew } from '../../public/data.json'

const Crew = () => {

    const [crews, setCrews] = useState(crew)
    const [value, setValue] = useState(0)


  return (
    <main className='crew'>

          <div className='title-crew'>
            <h2><span>02</span> MEET YOUR CREW</h2>
          </div>  

       <section className='infoCrew'>      
        <div className='info1-crew'>

          <h2>{crews[value].role.toLocaleUpperCase()}</h2>
          <h1>{crews[value].name.toLocaleUpperCase()}</h1>
          <p>{crews[value].bio}</p>
         
        </div> 
        <div className='buttonsContainer'>
            {
              crews.map((item, index) =>{
                return <button className={index === value ? "buttonCrewSub" : 'buttonCrew'} key={index} onClick={() => setValue(index)}></button>
              })
            }
          </div>
        <div className='img-crew'>
          <img src={crews[value].images.png} alt="" />
        </div>
      </section> 
      
    </main>
  )
}

export default Crew