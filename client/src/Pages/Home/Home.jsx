import React from 'react'
import Header from './Header'
import './home.css'
import Stats from './Stats'
import Wastes from './Wastes'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Wastes />
      <Stats />
    </div>
  )
}

export default Home