import React from 'react'
import Header from './Header'
import './home.css'
import Wastes from './Wastes'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Wastes />
    </div>
  )
}

export default Home