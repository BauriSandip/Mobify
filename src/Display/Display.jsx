import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Phone from './Phone'
import Headphone from './Headphone'
import Vr from './Vr'
import Laptop from './Laptop'
import Search from './Search'
import Wired from './Wired'
import Watch from './Watch'
import Ps from './Ps'
import Speaker from './Speaker'
import Login from '../components/login/Login'
const Display = ({handleClick}) => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phone' element={<Phone handleClick={handleClick} />} />
        <Route path='/headphone' element={<Headphone handleClick={handleClick} />} />
        <Route path='/vr' element={<Vr handleClick={handleClick} />} />
        <Route path='/laptop' element={<Laptop handleClick={handleClick}/>} />
        <Route path='/search' element={<Search handleClick={handleClick} />} />
        <Route path='/wired' element={<Wired handleClick={handleClick}/>} />
        <Route path='/watch' element={<Watch handleClick={handleClick} />} />
        <Route path='/ps' element={<Ps handleClick={handleClick}/>} />
        <Route path='/speaker' element={<Speaker handleClick={handleClick} />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default Display