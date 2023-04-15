import { Route, Routes } from 'react-router-dom'
import './App.css'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Home from './components/Home'
import Technology from './components/Technology'
import Header from './layout/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={(<Home />)}/>
        <Route path='/destination' element={(<Destination />)}/>
        <Route path='/crew' element={(<Crew />)}/>
        <Route path='/technology' element={(<Technology />)}/>
      </Routes>
    </div>
  )
}

export default App
