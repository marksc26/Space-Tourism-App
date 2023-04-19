import React from 'react'
import logoLoader from '../assets/shared/logo.svg'
import '../components/styles/Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
        <div className='imgLoader'>
           <img src={logoLoader} alt="" /> 
        </div>
    </div>
  )
}

export default Loader