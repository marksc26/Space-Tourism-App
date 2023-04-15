import React, { useState } from 'react'
import './styles/Technology.css'
import { technology } from '../../public/data.json'

const Technology = () => {

  const [tech, setTech] = useState(technology)
  const [value, setValue] = useState(0)


  return (
    <div className='technology'>

      <div className='titleTechnology'>
        <h2><span>03</span> SPACE LAUNCH 101</h2>
      </div>

      <section className='infoTech'>
        <div className='buttonsContainer-Tech'>
          {
            tech.map((item, index) => {
              return <button onClick={() => setValue(index)} className={index === value ? 'buttonsTechSub' : 'buttonsTech'} key={index}>{index + 1}</button>
            })
          }
        </div>
        <div className='info1-tech'>
          <h3>THE TERMINOLOGY...</h3>
          <h1>{tech[value].name.toUpperCase()}</h1>
          <p>{tech[value].description}</p>
        </div>

      </section>        
      <div className='imageTech'>
          <img src={tech[value].images.portrait} alt="" />
        </div>

    </div>
  )
}

export default Technology