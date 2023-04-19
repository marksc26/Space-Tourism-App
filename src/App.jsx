import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Home from './components/Home'
import Loader from './components/Loader'
import Technology from './components/Technology'
import Header from './layout/Header'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(!isLoading)
    },2000)
  }, [])

  return (
    <div className="App">

      {
        isLoading ? <Loader/> : <>   
      
      <Header/>
      <Routes>
        <Route path='/' element={(<Home />)}/>
        <Route path='/destination' element={(<Destination />)}/>
        <Route path='/crew' element={(<Crew />)}/>
        <Route path='/technology' element={(<Technology />)}/>
      </Routes>
      </>
      }

    </div>
  )
}

export default App
